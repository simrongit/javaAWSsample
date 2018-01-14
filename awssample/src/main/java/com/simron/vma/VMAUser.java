package com.simron.vma;

/**
 * @author simro
 * users (user_id, pass_code)
 */
public class VMAUser{
	private String userId;
	private String passwd;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String user) {
		this.userId = user;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
}
