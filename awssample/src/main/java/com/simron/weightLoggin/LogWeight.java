package com.simron.weightLoggin;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.simron.awssample.DbInteraction;

// table weight_log
// user_id,  creation_date, weight, wake_up_hour, wake_up_min {user_id, date desc}

@Service
@Scope(scopeName="singleton")
public class LogWeight {

	private DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	public WeightInfo getLastEntry(String userId) {
		String query = "select weight, wake_up_hour, wake_up_min, creation_date, note from weight_log where user_id = ? and note != '*Duplicate' order by creation_date desc limit 1"; // creating desc index didn't helped otherwise order by wasn't required
		String[][] userResult = DbInteraction.executeQuery(query, new String[] {userId});
		WeightInfo weightInfo = null;
		if(userResult.length == 0) {
			weightInfo = new WeightInfo();
		}else {
			weightInfo = toWeightInfo(userResult[0]);
		}
		// say last entry was created on 5th and today 8th request came
		// in this case entry for 6th and 7th is required is to be created.
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, -1);
		cal.set(Calendar.HOUR, 0);
		cal.set(Calendar.MINUTE,0); // Jan 7th 00:00
		cal.set(Calendar.SECOND,0);
		cal.set(Calendar.MILLISECOND, 0);
		Date yesterday000Date = cal.getTime();
		cal.setTime(weightInfo.getDate());
		cal.set(Calendar.HOUR, 0);
		cal.set(Calendar.MINUTE,0); 
		cal.set(Calendar.SECOND,0);
//		cal.set(Calendar.MILLISECOND, 0); not required as in DB we are not storing milli seconds
//		Date lastEntry0000Date = cal.getTime(); // Jan 5th 00:00
		try {
			while (cal.getTime().before(yesterday000Date)) {
				cal.add(Calendar.DAY_OF_MONTH, 1); // Jan 6th , Jan 7th
				WeightInfo newWeightInfo;
				newWeightInfo = (WeightInfo) weightInfo.clone();
				newWeightInfo.setUserId(userId);
				newWeightInfo.setDate(cal.getTime());
				newWeightInfo.setNote("*Duplicate");
				storeWeightInfo(newWeightInfo);
			}
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
		}
		return weightInfo;
	}

	private WeightInfo toWeightInfo(String[] userResult) {
		WeightInfo weightInfo = new WeightInfo();
		weightInfo.setHour(Integer.parseInt(userResult[1]));
		weightInfo.setMin(Integer.parseInt(userResult[2]));
		weightInfo.setWeight(Double.parseDouble(userResult[0]));
		try {
			weightInfo.setDate(dateFormat.parse(userResult[3]));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		weightInfo.setNote(userResult[4]);
		return weightInfo;
	}
	
	public List<WeightInfo> getHistory(String userId){
		String query = "select weight, wake_up_hour, wake_up_min, creation_date, note from weight_log where user_id = ? order by creation_date desc"; // limit vs rownum - mysql vs oracle
		String[][] userResult = DbInteraction.executeQuery(query, new String[] {userId});
		List<WeightInfo> listWeightInfo = new ArrayList<>();
		for(String[] userRes: userResult) {
			WeightInfo weightInfo = toWeightInfo(userRes);
			listWeightInfo.add(weightInfo);
		}
		return listWeightInfo;
	}
	
	public int storeWeightInfo(WeightInfo wInfo) {
		int res = 0;
		String query = "select 1 from weight_log where user_id = ? and creation_date = ?";
		if(DbInteraction.isExist(query, new String[] {wInfo.getUserId(), dateFormat.format(wInfo.getDate())})) {
			res = updateWeightInfo(wInfo);
		}else {
			query = "insert into weight_log values(?, ?, ?, ?, ?, ?)";
			res = DbInteraction.executeUpdate(query, new String[] {wInfo.getUserId(), dateFormat.format(wInfo.getDate()), Double.toString(wInfo.getWeight()), Integer.toString(wInfo.getHour()), Integer.toString(wInfo.getMin()), wInfo.getNote() });
		}
		return res;
	}
	
	public int updateWeightInfo(WeightInfo wInfo) {
		String query = "update weight_log set weight = ?, wake_up_hour = ?, wake_up_min = ?, note = ? where user_id = ? and creation_date = ?";
		int res = DbInteraction.executeUpdate(query, new String[] {Double.toString(wInfo.getWeight()), Integer.toString(wInfo.getHour()), Integer.toString(wInfo.getMin()), wInfo.getNote(), wInfo.getUserId(), dateFormat.format(wInfo.getDate())});
		return res;
	}
	
	public int createTable() {
		String query = "create table weight_log (user_id char(32), creation_date datetime, weight float, wake_up_hour int, wake_up_min int, primary key (user_id, creation_date))"; // int instead of number - mysql vs oracle
		int res = DbInteraction.executeUpdate(query, new String[] {});
		query = "create index weight_log_1x on weight_log(user_id, creation_date desc)";
//		query =  "drop table weight_log";
		res = DbInteraction.executeUpdate(query, new String[] {});
		return res;
	}
	
}
