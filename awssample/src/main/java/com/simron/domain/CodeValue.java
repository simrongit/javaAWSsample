package com.simron.domain;

public class CodeValue {

	private String code;
	private String value;
	
	public CodeValue(String code, String value) {
		super();
		this.code = code;
		this.value = value;
	}

	public static CodeValue[] getCCCodeValue() {
		CodeValue[] codeValues = new CodeValue[4];
		codeValues[0] = new CodeValue("1", "Visa");
		codeValues[0] = new CodeValue("2", "Master");
		codeValues[0] = new CodeValue("3", "Amx");
		codeValues[0] = new CodeValue("4", "Discover");
		return codeValues;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	
}
