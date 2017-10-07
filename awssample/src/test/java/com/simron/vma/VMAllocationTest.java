package com.simron.vma;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

//benefit of using Junit is multiple DB doesn't get created as DbInteraction gets only one instance
//NOTE : DB connection required

public class VMAllocationTest {
	
	//have to make it static because of BeforeClass
	private static VMAllocation vmAllocation = null;
	private static VMAUser testUser = null;
	private static VMAUser adminUser = null;
	private String testUserKey =  null;
	private String adminUserKey = null;
	
	@BeforeClass
	public static void createBeforeAllTests() {
		vmAllocation = new VMAllocation();
		testUser = new VMAUser();
		testUser.setUserId("test");
		testUser.setPasswd("test");
		adminUser = new VMAUser();
		adminUser.setUserId("admin");
		adminUser.setPasswd("test");
	}
	
	@Before
	public void createBeforeTest() {
		testUserKey = vmAllocation.login(testUser);
		adminUserKey = vmAllocation.login(adminUser);	
	}
	
	@After
	public void destroyAfterTest() {
		vmAllocation.removeVM(new VMInfo(adminUserKey,"test01v"));
		vmAllocation.logout(testUserKey);
		vmAllocation.logout(adminUserKey);
	}
	
	@Test
	public void loginLogout() {
		vmAllocation.logout(testUserKey);
		vmAllocation.logout(adminUserKey);
		
		String oldTestUserKey = vmAllocation.login(testUser);
		assertEquals(64, oldTestUserKey.length());

		//ensuring different time
		try {
			Thread.sleep(1);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		testUserKey = vmAllocation.login(testUser);
		assertEquals(64, testUserKey.length());
		assertNotEquals(oldTestUserKey, testUserKey);

		testUser.setPasswd("invalid password");
		String result = vmAllocation.login(testUser);
		assertEquals("User exist", result);

		result = vmAllocation.logout(oldTestUserKey);
		assertEquals("Not logged in", result);

		result = vmAllocation.logout(testUserKey);
		assertEquals("Success", result);

		result = vmAllocation.logout(testUserKey);
		assertEquals("Not logged in", result);
	}
	
	@Test
	public void addVM() {

		VMInfo vmInfo = new VMInfo("","");
		String result = vmAllocation.addVM(vmInfo);
		assertEquals("Not logged in", result);

		testUserKey = vmAllocation.login(testUser);
		vmInfo = new VMInfo(testUserKey,"test01v");
		result = vmAllocation.addVM(vmInfo);
		assertEquals("Not authorized", result);
		vmAllocation.logout(testUserKey);

		adminUserKey = vmAllocation.login(adminUser);
		vmInfo = new VMInfo(adminUserKey,"");
		result = vmAllocation.addVM(vmInfo);
		assertEquals("VM name not permitted", result);
		
		vmInfo = new VMInfo(adminUserKey,"test01v");
		result = vmAllocation.addVM(vmInfo);
		assertEquals("Success", result);
		
		result = vmAllocation.addVM(vmInfo);
		assertEquals("VM exist", result);

	}

	@Test
	public void removeVM() {
		VMInfo vmInfo = new VMInfo("","");
		String result = vmAllocation.removeVM(vmInfo);
		assertEquals("Not logged in", result);

		testUserKey = vmAllocation.login(testUser);
		vmInfo = new VMInfo(testUserKey,"");
		result = vmAllocation.removeVM(vmInfo);
		assertEquals("Not authorized", result);
		vmAllocation.logout(testUserKey);

		adminUserKey = vmAllocation.login(adminUser);
		vmInfo = new VMInfo(adminUserKey,"test01v");
		result = vmAllocation.addVM(vmInfo);
		result = vmAllocation.removeVM(vmInfo);
		assertEquals("Success", result);
		
		result = vmAllocation.removeVM(vmInfo);
		assertEquals("VM not exist", result);
	}
	
	@Test
	public void allocateVM() {
		VMInfo vmInfo = new VMInfo("","");
		String result = vmAllocation.allocateVM(vmInfo);
		assertEquals("Not logged in", result);

		vmInfo = new VMInfo(testUserKey,"test01v");
		result = vmAllocation.allocateVM(vmInfo);
		assertEquals("VM not exist", result);
		
		VMInfo adminVmInfo = new VMInfo(adminUserKey,"test01v");
		vmAllocation.addVM(adminVmInfo);
		vmInfo = new VMInfo(testUserKey,"test01v");
		result = vmAllocation.allocateVM(vmInfo);
		assertEquals("Success", result);
		
		vmInfo = new VMInfo(adminUserKey,"test01v");
		result = vmAllocation.allocateVM(vmInfo);
		assertEquals("Already allocated", result);
	}

	@Test
	public void releaseVM() {
		VMInfo vmInfo = new VMInfo("","");
		String result = vmAllocation.releaseVM(vmInfo);
		assertEquals("Not logged in", result);

		testUserKey = vmAllocation.login(testUser);
		vmInfo = new VMInfo(testUserKey,"test01v");
		result = vmAllocation.releaseVM(vmInfo);
		assertEquals("VM not exist", result);
		
		VMInfo adminVmInfo = new VMInfo(adminUserKey,"test01v");
		vmAllocation.addVM(adminVmInfo);
		vmAllocation.allocateVM(vmInfo);
		result = vmAllocation.releaseVM(adminVmInfo);
		assertEquals("Locked by other", result);
		
		result = vmAllocation.releaseVM(vmInfo);
		assertEquals("Success", result);
		
		result = vmAllocation.releaseVM(vmInfo);
		assertEquals("Already released", result);
	}
	

}
