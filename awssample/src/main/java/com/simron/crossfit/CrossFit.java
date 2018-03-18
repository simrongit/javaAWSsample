package com.simron.crossfit;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.stereotype.Service;

import com.simron.awssample.DbInteraction;

/**
 * @author simro
 *
create table login (email varchar(256), commited varchar(32));
insert into login values('abc', 'true');
commit;
create table exercise_chart (edate varchar(32), eexercisechart varchar(1024));
create table exercise_meter (edate varchar(32), exercise varchar(256), metering varchar(32));
create table exercise_user (edate varchar(32), ename varchar(32), exercise varchar(256), metering varchar(32), etime varchar(32), weight varchar(32));
create table exercise_ref (ekey varchar(32), evalue varchar(2048));
insert into exercise_ref values ('group','WarmUp;Metcon;FunBurn;Accessory');
insert into exercise_ref values ('time','07:00;08:00');
insert into exercise_ref values ('exercise','Burpees;Situps;Rowing');

 */

@Service
public class CrossFit {
	
	private DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	public String getRef(String category) {
		
		System.out.println("ref");
//		category = category.substring(0,category.length()-1); //This is called from String caller hence need to remove last characte
		//one of the url talks about encoding, stating set encoding = true to remove extra characters
		String ret = "Failure";
		ExerciseRef ref = ExerciseRef.blank;
		try {
			ref = ExerciseRef.valueOf(category);
		}catch (IllegalArgumentException e) {
			System.out.println("Aha hacker - category "+category);
			e.printStackTrace();
		}
		String[][] data = DbInteraction.executeQuery("select evalue from exercise_ref where ekey = ? order by 1", new String[] {ref.name()}); 
		if(data.length != 0 && data[0].length != 0 && data[0][0]!=null) { 
			ret = data[0][0];
		}
		return ret;
	}
	
	public String addRef(String key, String valueToAppend) {
		String ret = "Failure";
		String value = getRef(key);
		if(!"Failure".equals(value)) {
			value += ";"+valueToAppend;
			int updated = DbInteraction.executeUpdate("update exercise_ref set evalue = ? where ekey = ?", new String[] {value, key});
			if(updated != -1) {
				ret = "Success";
			}
		}
		return ret;
	}

	public String addExercise(long date, String exChart, List<ExerciseData> meteredData) { //TODO make it robust
		System.out.println("date "+date);
		String ret = "Failure";
		int updated = DbInteraction.executeUpdate("insert into exercise_chart values (? , ?)", new String[] {date+"", exChart});
		if(updated != -1) {
			String[][] parametersList = new String[meteredData.size()][3];
			for(int i=0; i<parametersList.length; i++) {
				parametersList[i][0] = date+"";
				parametersList[i][1] = meteredData.get(i).getExercise();
				parametersList[i][2] = meteredData.get(i).getMetering();
			}
			int[] result = DbInteraction.executeBatchInsert("insert into exercise_meter values (?, ? , ?)", parametersList);
			if(result.length != 0) { // TODO robust check required
				ret = "Success";
			}
		}
		return ret;
	}
	
	public MinMaxExDate getExDates() {
		String[][] data = DbInteraction.executeQuery("select min(edate) emin, max(edate) emax from exercise_meter", new String[] {});
		MinMaxExDate minMaxExDate = new MinMaxExDate();
		minMaxExDate.setMinDateL(data[0][0]);
		minMaxExDate.setMaxDateL(data[0][1]);
		System.out.println(minMaxExDate.getMinDateL()+" "+minMaxExDate.getMaxDateL());
		return minMaxExDate;
	}
	
	public String getExChart(String date) {
		System.out.println(date);
		String[][] data = DbInteraction.executeQuery("select exercisechart from exercise_chart where edate = ?", new String[] {date});
		return data[0].length != 0?data[0][0]:"Failure";
	}
	
	public ExerciseData[] getMeteredExercise(String date) {
		String[][] data = DbInteraction.executeQuery("select exercise, metering from exercise_meter where edate = ?", new String[] {date});
		ExerciseData[] exerciseDatas = new ExerciseData[data.length];
		for(int i=0; i<data.length; i++) {
			ExerciseData exerciseData = new ExerciseData();
			exerciseDatas[i] = exerciseData;
			exerciseData.setExercise(data[i][0]);
			exerciseData.setMetering(data[i][1]);
		}
		return exerciseDatas;
	}

}
