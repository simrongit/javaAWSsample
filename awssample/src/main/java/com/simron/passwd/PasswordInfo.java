package com.simron.passwd;

public class PasswordInfo {
	private String passwd;
	private String salt;
	private String generatedPasswd;
	private String encryptedPasswd;
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getSalt() {
		return salt;
	}
	public void setSalt(String salt) {
		this.salt = salt;
	}
	public String getGeneratedPasswd() {
		return generatedPasswd;
	}
	public void setGeneratedPasswd(String generatedPasswd) {
		this.generatedPasswd = generatedPasswd;
	}
	public String getEncryptedPasswd() {
		return encryptedPasswd;
	}
	public void setEncryptedPasswd(String encryptedPasswd) {
		this.encryptedPasswd = encryptedPasswd;
	}
}
