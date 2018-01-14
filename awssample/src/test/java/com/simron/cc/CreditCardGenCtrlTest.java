package com.simron.cc;


import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CreditCardGenCtrlTest {

	
	@Test
	public void runCCLuhnAlgo1() {
		Integer[] arr = new Integer[] {4,4,0,0, 6,6,6,2, 2,3,6,2, 2,3,6};
		int returnVal = CreditCardGenCtrl.luhnAlgoModulo10(arr);
		assertEquals(2, returnVal);
	}
	
	@Test
	public void runCCLuhnAlgo2() {
		Integer[] arr = new Integer[] {4,0,3,7, 8,4,0,0, 6,0,0,8, 4,7,9};
		int returnVal = CreditCardGenCtrl.luhnAlgoModulo10(arr);
		assertEquals(3, returnVal);
	}
	
	@Test
	public void runCCLuhnAlgo3() {
		CreditCardGenCtrl cc = new CreditCardGenCtrl();
		String returnVal = cc.genPasswd(1);
		assertEquals("4", returnVal.substring(0,1));
		assertEquals(16, returnVal.length());
	}
}

