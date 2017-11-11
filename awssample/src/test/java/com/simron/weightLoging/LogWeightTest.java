package com.simron.weightLoging;

import java.util.Date;
import java.util.List;

import org.junit.Assert;
import org.junit.BeforeClass;

import com.simron.weightLoggin.LogWeight;
import com.simron.weightLoggin.WeightInfo;

public class LogWeightTest {
	
	public void createTable() {
		int res = logWeight.createTable();
		Assert.assertEquals(0, res);
	}
	
	private static LogWeight logWeight;
	
	@BeforeClass
	public static void createBeforeAllTests() {
		logWeight = new LogWeight();
	}
	
	public void storeWeightInfo() {
		WeightInfo wInfo = new WeightInfo();
		wInfo.setDate(new Date(System.currentTimeMillis()));
		wInfo.setUserId("simron");
		wInfo.setHour(9);
		wInfo.setMin(30);
		wInfo.setWeight(172.1);
		int res = logWeight.storeWeightInfo(wInfo);
		Assert.assertEquals(1, res);
	}
	
	public void getLastEntry() {
		WeightInfo weightTime = logWeight.getLastEntry("simron");
		Assert.assertNotNull(weightTime);
		Assert.assertNotNull(weightTime.getHour());
	}
	
	public void getHistory() {
		List<WeightInfo> weightInfoList = logWeight.getHistory("simron");
		Assert.assertNotNull(weightInfoList);
		Assert.assertNotNull(weightInfoList.size());
	}

}
