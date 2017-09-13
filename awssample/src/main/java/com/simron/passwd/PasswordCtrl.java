package com.simron.passwd;

import java.util.Map;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simron.utils.CustomException;
import com.simron.utils.LoggerFactory;

@RestController
public class PasswordCtrl {

	@Autowired
	private LoggerFactory loggerFactory;
	
	private Logger logger;
	
	@PostConstruct
	private void init() {
		logger = loggerFactory.getLogger(PasswordCtrl.class, "passwordApp");
	}
	
	@Autowired
	private Password passwordTool;

    @PostMapping("/generatePasswd")
    public PasswordInfo genPasswd(@RequestBody PasswordInfo passwdInfo) {
    	mandatoryString(passwdInfo.getPasswd(),"Vault Password", 0);
    	mandatoryDitigs(passwdInfo.getSalt(), "Salt", 8);
    	logger.info("Password Generation Called");
    	passwordTool.generatePassword(passwdInfo);
        return passwdInfo;
    }

	private void mandatoryString(String str, String strName, int length) {
		if(StringUtils.isEmpty(str) || (length != 0 && str.length() != length)) {
    		throw new CustomException("Mandatory " + strName + " string missing" + (length!=0?" of length "+length:""));
    	}
	}
	
	private void mandatoryDitigs(String digits, String strName, int length) {
		if(!StringUtils.isEmpty(digits) && (digits.length() != length || digits.matches("^[^0-9]*$"))) {
    		throw new CustomException("Mandatory " + strName + " digits missing" + (length!=0?" of length "+length:""));
    	}
	}
    
    @PostMapping("/decryptPasswd")
    public PasswordInfo decPasswd(@RequestBody PasswordInfo passwdInfo) {
    	mandatoryString(passwdInfo.getPasswd(), "Vault Password", 0);
    	mandatoryDitigs(passwdInfo.getSalt(), "Salt", 8);
    	mandatoryString(passwdInfo.getEncryptedPasswd(), "Encrypted Password", 64);
    	passwordTool.decryptPassword(passwdInfo);
        return passwdInfo;
    }
    
    /**
     *   Success, User not found, User not authenticated
     * @param passwdSaveInfo
     * @return
     */
//    @PostMapping("/validateUser")
//    public String validateUser(@RequestBody PasswordSaveInfo passwdSaveInfo) {
//    	String result = passwordTool.validateUser(passwdSaveInfo.getUserId(), passwdSaveInfo.getPassCode());
//    	if(!result.equals("Success")) {
//    		throw new CustomException("Some message");
//    	}
//        return result;
//    }
    
    @PostMapping("/retPasswd")
    public Map<String, String> retrievePasswd(@RequestBody PasswordSaveInfo passwdSaveInfo) throws CustomException{
    	mandatoryString(passwdSaveInfo.getUserId(), "User Id", 0);
    	mandatoryDitigs(passwdSaveInfo.getPassCode(), "Pass Code", 4);
    	String status = passwordTool.validateUser(passwdSaveInfo.getUserId(), passwdSaveInfo.getPassCode());
    	if(!status.equals("Success")) {
    		throw new CustomException(status);
    	}
    	Map<String, String> data = passwordTool.retrievePassword(passwdSaveInfo.getUserId(), passwdSaveInfo.getPassCode());
        return data;
    }

    /**
     *   Success, User exist, Save to DB failed
     * @param passwdSaveInfo
     * @return
     */
    @PostMapping("/newUser")
    public void newUser(@RequestBody PasswordSaveInfo passwdSaveInfo) { // if we require user passcode to be generated then need to return String from this method. Can't return object because response type is text and that is becuase of BUG where response type has to be text in order to receive error message
    	String status = passwordTool.validateAndsavePassword(passwdSaveInfo, true);
    	if(!status.equals("Success")) {
    		throw new CustomException(status);
    	}
    }
    
    /**
     *   Success, Save to DB failed, User not found, User not authenticated
     * @param passwdSaveInfo
     * @return
     */
    @PostMapping("/savePasswd")
    public void savePasswd(@RequestBody PasswordSaveInfo passwdSaveInfo) throws CustomException{
    	mandatoryString(passwdSaveInfo.getUserId(), "User Id", 0);
    	mandatoryDitigs(passwdSaveInfo.getPassCode(), "Pass Code", 4);
    	mandatoryString(passwdSaveInfo.getRefText(), "Reference Text", 0);
    	mandatoryString(passwdSaveInfo.getEncPasswd(), "Encrypted Password", 64);
    	
    	String status = passwordTool.validateAndsavePassword(passwdSaveInfo, false);
    	if(!status.equals("Success")) {
//    		throw new CustomExceptionStr(status);
    		throw new CustomException(status);
    	}
    }
    
}
