package com.simron.crossfit;

import org.junit.Assert;
import org.junit.Test;

public class CrossFitTest {

	public void getRefTest() {
		CrossFit cf = new CrossFit();
		String data = cf.getRef("group");
		System.out.println(data);
		Assert.assertNotNull(data);
	}
	
	public void addRefTest() {
		CrossFit cf = new CrossFit();
		String data = cf.addRef("time","09:00");
		System.out.println(data);
		Assert.assertNotNull(data);
	}
	
	@Test
	public void minMaxTest() {
		CrossFit cf = new CrossFit();
		MinMaxExDate data = cf.getExDates();
		System.out.println(data);
		Assert.assertNotNull(data);
	}
}
