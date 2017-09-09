package com.simron.passwd;

public class PasswordSaveInfo {
	private String userId;
	private String passCode;
	private String refText;
	private String encPasswd;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassCode() {
		return passCode;
	}
	public void setPassCode(String passCode) {
		this.passCode = passCode;
	}
	public String getRefText() {
		return refText;
	}
	public void setRefText(String refText) {
		this.refText = refText;
	}
	public String getEncPasswd() {
		return encPasswd;
	}
	public void setEncPasswd(String encPasswd) {
		this.encPasswd = encPasswd;
	}
	
}
