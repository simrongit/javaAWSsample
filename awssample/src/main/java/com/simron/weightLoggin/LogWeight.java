package com.simron.weightLoggin;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
		String query = "select weight, wake_up_hour, wake_up_min, creation_date, note from weight_log where user_id = ? order by creation_date desc limit 1"; // creating desc index didn't helped otherwise order by wasn't required
		String[][] userResult = DbInteraction.executeQuery(query, new String[] {userId});
		WeightInfo weightInfo = null;
		if(userResult.length == 0) {
			weightInfo = new WeightInfo();
		}else {
			weightInfo = toWeightInfo(userResult[0]);
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
		String query = "insert into weight_log values(?, ?, ?, ?, ?, ?)";
		int res = DbInteraction.executeUpdate(query, new String[] {wInfo.getUserId(), dateFormat.format(wInfo.getDate()), Double.toString(wInfo.getWeight()), Integer.toString(wInfo.getHour()), Integer.toString(wInfo.getMin()), wInfo.getNote() });
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
