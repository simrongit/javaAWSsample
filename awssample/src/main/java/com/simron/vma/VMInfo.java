package com.simron.vma;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.xml.bind.DatatypeConverter;

public class VMInfo{
	/**
	 * hash of user+time, security check 
	 * (from frontend only user_id is expected it means if you are logged in then in my system I can change my user id to yours and it will work)
	 * (if user_id hash is given to frontend then I can go to your machine and copy that hash, will use it going forward for forever)
	 * (hash of user+time will change whenever user logs in so even if I copy the hash I won't be able to use same next time)
	 */
	private String userKey;
	private String vmName;
	public String getUserKey() {
		return userKey;
	}
	public void setUserKey(String userKey) {
		this.userKey = userKey;
	}
	public String getVmName() {
		return vmName;
	}
	public void setVmName(String vmName) {
		this.vmName = vmName;
	}
	public VMInfo() {
	}
	public VMInfo(String aUserKey, String aVmName) {
		this.userKey = aUserKey;
		this.vmName = aVmName;
	}
	public String generateUserKey(String user) {
		md.update((user+"|"+System.currentTimeMillis()).getBytes());
		byte[] hashedBytes = md.digest();
		String hashedHexBytes = DatatypeConverter.printHexBinary(hashedBytes);
		md.reset();
		return hashedHexBytes;
	}
	
	private static MessageDigest md = null;
	
	static {
		try {
			md = MessageDigest.getInstance("SHA-256");
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
	}

}
