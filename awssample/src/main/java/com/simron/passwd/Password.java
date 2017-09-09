package com.simron.passwd;

import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
//https://stackoverflow.com/questions/992019/java-256-bit-aes-password-based-encryption
//http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html

import com.simron.awssample.DbInteraction;
import com.simron.utils.LoggerFactory;

@Service
@Scope(scopeName="singleton") //container level
public class Password {
	
	@Autowired
	private LoggerFactory loggerFactory;
	
	private Logger logger;
	
	@PostConstruct
	private void init() {
		logger = loggerFactory.getLogger(Password.class, "passwordApp");
		try {
			md = MessageDigest.getInstance("SHA-256");
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
	}
	
	private final String CipherAlgorithim = "AES/CBC/PKCS5Padding"; //ECB could have been used to avoid iv padding. However iv padding is supposed to provide more security but it is recommended to use different iv each time. I am assuming CBC with fixed iv will be better than ECB as hacking into application to get hard coded iv is difficult. 
	private final IvParameterSpec ivParameterSpec = new IvParameterSpec(new byte[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 });
	private final String SecretKeyAlg = "PBKDF2WithHmacSHA256";
	private final String SecretKeySpect = "AES"; //AES is preferred over DES
	
	public void generatePassword(PasswordInfo passwordInfo) {
		if(StringUtils.isEmpty(passwordInfo.getPasswd())) {
			return;//user valut passwd is mandatory
		}
		if(StringUtils.isEmpty(passwordInfo.getSalt())) {
			String salt = createSalt();
			passwordInfo.setSalt(salt);
		}
		
		String generatedPassword = createPassword();
		passwordInfo.setGeneratedPasswd(generatedPassword);
		
		String encryped = ecnryptPassword(passwordInfo.getPasswd(), passwordInfo.getSalt(), generatedPassword);
		System.out.println("Encrypted length "+encryped.length());
		passwordInfo.setEncryptedPasswd(encryped);
	}
	
	public void decryptPassword(PasswordInfo passwordInfo) {
		String plaintext = decryptText(passwordInfo.getPasswd(), passwordInfo.getSalt(), passwordInfo.getEncryptedPasswd());
		passwordInfo.setGeneratedPasswd(plaintext);
	}

	private String decryptText(String passwd, String salt, String encryptedPassword) {
		String plaintext = null;
		try {
			SecretKey secret = getSecret(passwd, salt);
			Cipher cipher = Cipher.getInstance(CipherAlgorithim);
//			AlgorithmParameters params = cipher.getParameters();
//			byte[] iv = params.getParameterSpec(IvParameterSpec.class).getIV();
			cipher.init(Cipher.DECRYPT_MODE, secret, ivParameterSpec);
			byte[] decryptedBytes = cipher.doFinal(DatatypeConverter.parseHexBinary(encryptedPassword));
			plaintext = new String(decryptedBytes,Charset.defaultCharset());
			logger.finer("Encrypted String "+plaintext);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return plaintext;
	}

	private String ecnryptPassword(String passwd, String salt, String generatedPassword) {
		String encryped = null;
		try {
			SecretKey secret = getSecret(passwd, salt);
			Cipher cipher = Cipher.getInstance(CipherAlgorithim);
//			AlgorithmParameters params = cipher.getParameters();
//			byte[] iv = params.getParameterSpec(IvParameterSpec.class).getIV();
			cipher.init(Cipher.ENCRYPT_MODE, secret, ivParameterSpec);
			byte[] ciphertext = cipher.doFinal(generatedPassword.getBytes());
			encryped = DatatypeConverter.printHexBinary(ciphertext);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return encryped;
	}

	private SecretKey getSecret(String passwd, String salt) throws NoSuchAlgorithmException, InvalidKeySpecException {
		SecretKeyFactory factory = SecretKeyFactory.getInstance(SecretKeyAlg);
		KeySpec spec = new PBEKeySpec(passwd.toCharArray(), salt.getBytes(), 65536, 256);
		SecretKey tmp = factory.generateSecret(spec);
		SecretKey secret = new SecretKeySpec(tmp.getEncoded(), SecretKeySpect);
		return secret;
	}

	private String createPassword() {
		int counter = 0;
		String generatedPassword = "";
		while (counter != 25) {
			Double d = Math.random() * 128;
			Integer oneChar = d.intValue();
			if (oneChar >= 33 && oneChar <= 126) {
				generatedPassword += (char) oneChar.byteValue();
				++counter;
			}
		}
		return generatedPassword;
	}

	private String createSalt() {
		String salt = "";
		int counter = 0;
		while (counter != 8) {
			Double d = Math.random() * 128;
			Integer oneChar = d.intValue();
			if (oneChar >= 48 && oneChar <= 57) {
				salt += (char) oneChar.byteValue();
				++counter;
			}
		}
		return salt;
	}

	/**
	 * Success, User exist, Save to DB failed, User not found, User not authenticated
	 * 
	 * @param passwdSaveInfo
	 * @param skipUserValidation
	 * @return
	 */
	public String validateAndsavePassword(PasswordSaveInfo passwdSaveInfo, Boolean skipUserValidation) {
		String hashedUserId = performHashingWithHexResult(passwdSaveInfo.getUserId());
		String userIdStatus = queryDBForUserId(hashedUserId);
		String retVal;
		if(skipUserValidation) {
			if (userIdStatus.equals("Success")) {
				retVal = "User exist";
			}else {
				boolean status = storePasswdInDB(passwdSaveInfo);
				if(status) {
					retVal = "Success";
				}else {
					retVal = "Save to DB failed";
				}
			}
		}else{
			if (!userIdStatus.equals("Success")) {
				retVal = "User not found";
			}else {
				String hashedPassCode = performHashingWithHexResult(passwdSaveInfo.getPassCode());
				String userExistStatus = queryDBForUserAndPassCode(hashedUserId, hashedPassCode);
				if (!userExistStatus.equals("Success")) {
					retVal = "User not authenticated";
				}else {
					boolean status = storePasswdInDB(passwdSaveInfo);
					if(status) {
						retVal = "Success";
					}else {
						retVal = "Save to DB failed";
					}
				}
			}
		}
		System.out.println("Save Password");
		return retVal;
	}
	
	private MessageDigest md = null;
	
	public String validateUser (String userId, String passCode) {
		String hashedUserId = performHashingWithHexResult(userId);
		String hashedPassCode = performHashingWithHexResult(passCode);
		String returnStr = "";
		String userIdStatus = queryDBForUserId(hashedUserId);
		if(userIdStatus.equals("Success")) {
			String userExistStatus = queryDBForUserAndPassCode(hashedUserId, hashedPassCode);
			if(userExistStatus.equals("Success")) {
				returnStr = "Success";
			} else {
				returnStr = "User not authenticated";
			}
		}else {
			returnStr = "User not found";
		}
		return returnStr;
	}

	private String performHashingWithHexResult(String str) {
		md.update(str.getBytes());
		byte[] hashedBytes = md.digest();
		String hashedHexBytes = DatatypeConverter.printHexBinary(hashedBytes);
		System.out.println("hash length for "+str+" is "+hashedHexBytes.length());
		md.reset();
		return hashedHexBytes;
	}

	private static final String checkUserQuery = "select 1 from encrypted_passwd_storage where user_id = ?";
	private static final String checkUsePassCoderQuery = "select 1 from encrypted_passwd_storage where user_id = ? and pass_code = ?";
	private static final String getDataQuery="select password_text, enc_password from encrypted_passwd_storage where user_id = ? and pass_code = ?";
	private static final String insertDataQuery="insert into encrypted_passwd_storage values (?,?,?,?)";

	private Map<String, String> queryDBForUser(String hashedUserId, String hashedPassCode) {
		String[][] data = DbInteraction.executeQuery(getDataQuery, new String[] {hashedUserId, hashedPassCode});
		Map<String, String> result = new HashMap<>(); //why to create map?
		for(String[] row : data) {
			result.put(row[0], row[1]); 
		}
//		result.put("site 1", "111111111111111111111111222222222222");
//		result.put("google", "XXXXXXXXXXXXEEEEEEEEEEEEEEE@@@@@@@@@@@@@@@@");
//		result.put("site something", "YYYYYYYYYYYYXXXXXXXXXXXXXXXXX");
		return result;
	}

	private boolean storePasswdInDB(PasswordSaveInfo passwdSaveInfo) {
		String hashedUserId = performHashingWithHexResult(passwdSaveInfo.getUserId());
		String hashedPassCode = performHashingWithHexResult(passwdSaveInfo.getPassCode());
		DbInteraction.executeInsert(insertDataQuery, new String[] {hashedUserId, hashedPassCode, passwdSaveInfo.getRefText(), passwdSaveInfo.getEncPasswd()});
		return true; // need to fix it
	}

	private String queryDBForUserAndPassCode(String hashedUserId, String hashedPassCode) {
		String[][] data = DbInteraction.executeQuery(checkUsePassCoderQuery, new String[] {hashedUserId, hashedPassCode});
		String retStr = null;
		if(data[0][0] != null && data[0][0].equals("1")) {
			retStr = "Success";
		}else {
			retStr = "Failed";
		}
		return retStr;
	}

	private String queryDBForUserId(String hashedUserId) {
		String[][] data = DbInteraction.executeQuery(checkUserQuery, new String[] {hashedUserId});
		String retStr = null;
		if(data != null && data.length > 0 && data[0].length > 0 && data[0][0] != null && data[0][0].equals("1")) {
			retStr = "Success";
		}else {
			retStr = "Failed";
		}
		return retStr;
	}

	public Map<String, String> retrievePassword(String userId, String passCode) {
		String hashedUserId = performHashingWithHexResult(userId);
		String hashedPassCode = performHashingWithHexResult(passCode);
		Map<String, String> siteAndPasswd = queryDBForUser(hashedUserId, hashedPassCode);
		return siteAndPasswd;
	}

}

/*

package home;

import java.security.AlgorithmParameters;
import java.security.spec.KeySpec;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

public class Password {

	public static void main(String[] args) {
		int counter = 0;
		String generatedPassword = "";
		while (counter != 25) {
			Double d = Math.random() * 128;
			Integer oneChar = d.intValue();
			if (oneChar >= 33 && oneChar <= 126) {
				generatedPassword += (char) oneChar.byteValue();
				++counter;
			}
		}
		System.out.println(generatedPassword);
		String salt = "";
		counter = 0;
		while (counter != 8) {
			Double d = Math.random() * 128;
			Integer oneChar = d.intValue();
			if (oneChar >= 48 && oneChar <= 57) {
				salt += (char) oneChar.byteValue();
				++counter;
			}
		}
		System.out.println(salt);
		System.out.println(salt.getBytes().length);
		String myPassword = "myPassword";
		try {
			// Derive the key, given password and salt. 
			SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
			KeySpec spec = new PBEKeySpec(myPassword.toCharArray(), salt.getBytes(), 65536, 256);
			SecretKey tmp = factory.generateSecret(spec);
			SecretKey secret = new SecretKeySpec(tmp.getEncoded(), "AES");

			// Encrypt the message. 
			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, secret);
			AlgorithmParameters params = cipher.getParameters();
			byte[] ciphertext = cipher.doFinal(generatedPassword.getBytes("UTF-8"));
			String hexStr = DatatypeConverter.printHexBinary(ciphertext);
			System.out.println(hexStr);
//			ciphertext = ct.getBytes();
			// Decrypt the message, given derived key and initialization vector.
			cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			byte[] iv = params.getParameterSpec(IvParameterSpec.class).getIV();
			cipher.init(Cipher.DECRYPT_MODE, secret, new IvParameterSpec(iv));
			String plaintext = new String(cipher.doFinal(DatatypeConverter.parseHexBinary(hexStr)), "UTF-8");
			System.out.println(plaintext);
			
//			KeyGenerator keygenerator = KeyGenerator.getInstance("DES");
//		    SecretKey myDesKey = keygenerator.generateKey();
//
//		    Cipher desCipher;
//
//		    // Create the cipher
//		    desCipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
//
//		    // Initialize the cipher for encryption
//		    desCipher.init(Cipher.ENCRYPT_MODE, myDesKey);
//
//		    //sensitive information
//
//		    System.out.println("Text : " + generatedPassword);
//
//		    // Encrypt the text
//		    byte[] textEncrypted = desCipher.doFinal(generatedPassword.getBytes());
//
//		    System.out.println("Text Encryted : " + new String(textEncrypted));
//
//		    // Initialize the same cipher for decryption
//		    desCipher.init(Cipher.DECRYPT_MODE, myDesKey);
//
//		    // Decrypt the text
//		    byte[] textDecrypted = desCipher.doFinal(textEncrypted);
//
//		    System.out.println("Text Decryted : " + new String(textDecrypted));
//			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

// https://stackoverflow.com/questions/992019/java-256-bit-aes-password-based-encryption
// http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html


*/