package com.simron.utils;

import org.springframework.util.StringUtils;

public class MandatoryInputs {

	public static void string(String str, String strName) {
		string(str, strName, 0);
	}
	public static void string(String str, String strName, int length) {
		if(StringUtils.isEmpty(str) || (length != 0 && str.length() != length)) {
    		throw new CustomException("Mandatory " + strName + " string missing" + (length!=0?" of length "+length:""));
    	}
	}
	
	public static void ditigs(String digits, String strName) {
		ditigs(digits, strName, 0);
	}
	public static void ditigs(String digits, String strName, int length) {
		if(!StringUtils.isEmpty(digits) && (digits.length() != length || digits.matches("^[^0-9]*$"))) {
    		throw new CustomException("Mandatory " + strName + " digits missing" + (length!=0?" of length "+length:""));
    	}
	}
    
	public static void stringStr(String str, String strName) {
		stringStr(str, strName, 0);
	}
	public static void stringStr(String str, String strName, int length) {
		if(StringUtils.isEmpty(str) || (length != 0 && str.length() != length)) {
    		throw new CustomExceptionStr("Mandatory " + strName + " string missing" + (length!=0?" of length "+length:""));
    	}
	}
	
	public static void ditigsStr(String digits, String strName) {
		ditigsStr(digits, strName, 0);
	}
	public static void ditigsStr(String digits, String strName, int length) {
		if(!StringUtils.isEmpty(digits) && (digits.length() != length || digits.matches("^[^0-9]*$"))) {
    		throw new CustomExceptionStr("Mandatory " + strName + " digits missing" + (length!=0?" of length "+length:""));
    	}
	}

}
