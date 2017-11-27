package com.simron.weightLoging;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

import com.simron.awssample.DbInteraction;
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
	
//	@Test
	public void updateEntries() {
		int res = DbInteraction.executeUpdate("update weight_log set note = ?", new String[] {""});
		Assert.assertEquals(114, res);
	}
	
//	@Test
	public void deleteEntries() {
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		int res = DbInteraction.executeUpdate("delete from weight_log where user_id = ? and creation_date = ?", new String[] {"Simron", "2017-10-11 23:32:12.0"});
		Assert.assertEquals(1, res);
	}
	
//	@Test
	public void selectEntries() {
		String[][] res = DbInteraction.executeQuery("select * from weight_log where user_id = ?", new String[] {"Simron"});
		System.out.println(res);
	}
	
//	@Test
	public void addColumn() {
		int res = DbInteraction.executeUpdate("alter table weight_log add note varchar(255)", new String[] {});
		Assert.assertEquals(0, res);
	}
	
//	@Test
	public void insertEntries() {
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
		double[][] dArr = new double[][] {{8,15,171.2},
			{8,00,171.6},
			{8,00,171.8},
			{8,30,172},
			{8,00,172.6},
			{9,00,172},
			{10,30,172.2},
			{11,00,171.6},
			{9,00,170.6},
			{9,00,171.2},
			{9,00,171.8},
			{8,30,171.6},
			{9,00,171.6},
			{11,00,172},
			{11,30,172},
			{9,00,172},
			{9,00,172},
			{9,00,172},
			{9,00,172},
			{8,00,171},
			{9,00,172},
			{11,00,172.4},
			{9,00,173.2},
			{9,00,173.2},
			{9,30,172.2},
			{9,00,171.8},
			{9,00,172},
			{11,30,173.8},
			{11,00,174.4},
			{9,30,174},
			{10,00,173.6},
			{9,30,173.8},
			{10,00,173.8},
			{11,00,172},
			{12,00,171.6},
			{9,30,173},
			{8,30,174.4},
			{9,00,176.4},
			{9,00,176.6},
			{9,30,176.6},
			{9,00,177},
			{9,00,176.6},
			{9,00,177},
			{9,30,176.6},
			{9,30,175},
			{9,00,174.4},
			{10,00,175.2},
			{9,00,177},
			{10,30,178},
			{7,30,178},
			{7,00,177.2},
			{10,00,177.2},
			{9,30,177.4},
			{9,30,177.6},
			{9,30,177.6},
			{10,00,177.6},
			{8,00,178.4},
			{7,30,176.2},
			{8,00,176.6},
			{05,00,176.8},
			{8,30,176.6},
			{11,30,179},
			{11,00,177.4},
			{10,30,176.6},
			{8,30,176.8},
			{9,00,176.6},
			{8,00,176.6},
			{9,30,176.4},
			{8,30,177.2},
			{10,30,178.4},
			{10,00,178.2},
			{9,00,178.2},
			{8,00,179},
			{7,30,178.2},
			{8,30,178.2},
			{05,00,179.8},
			{10,00,179},
			{10,00,179.2},
			{8,00,181.6},
			{9,00,180},
			{9,00,178.2},
			{9,00,178.6},
			{9,00,180.8},
			{10,00,180.4},
			{05,30,179},
			{9,00,178.8},
			{8,30,179.6},
			{8,30,179},
			{8,00,179.8},
			{7,30,181},
			{11,00,181.4},
			{10,30,181.2},
			{9,00,180.8},
			{9,00,182.4},
			{9,00,180.6},
			{7,30,181.2},
			{7,00,182.8},
			{7,30,183.6},
			{11,00,181.4},
			{8,00,182.6},
			{8,30,182.4},
			{9,00,183.4},
			{9,30,183.2},
			{9,30,184.6}};
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.DATE, 4);
		cal.set(Calendar.HOUR, 8);
		for(double[] arr : dArr) {
			int res = DbInteraction.executeUpdate("insert into weight_log values(?, ?, ?, ?, ?)"
					, new String[] {"Simron", dateFormat.format(cal.getTime()), Double.toString(arr[2]), Integer.toString((int)arr[0]), Integer.toString((int)arr[1]) });
			Assert.assertEquals(1, res);
//			System.out.println(cal.getTime().toString()+" "+Double.toString(arr[0])+" "+ Double.toString(arr[1])+" "+ Double.toString(arr[2]));
			cal.add(Calendar.DAY_OF_WEEK, -1);
		}
	}
	
	

}
