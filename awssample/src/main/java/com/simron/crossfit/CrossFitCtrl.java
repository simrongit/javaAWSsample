package com.simron.crossfit;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simron.awssample.DbInteraction;
import com.simron.crossfit.pojo.LoginInfo;
import com.simron.domain.Wrapper;

@RestController
@RequestMapping("cf")
public class CrossFitCtrl {
	
	@Autowired
	private CrossFit crossFitService;

	@PostMapping("login")
	public Wrapper login(@RequestBody LoginInfo loginInfo) {
		String ret = "Failure";
//		email = email.substring(0, email.length()-1); Only for case when StringRequest is used in Android, if you pass abc it get converted into abc=, in that case Request body as well is String
		if(DbInteraction.isExist("select 1 from login where email = ?" , new String[] {loginInfo.getEmail()})) {
			if( 1 == DbInteraction.executeUpdate("update login set ename=? where email = ?", new String[] {loginInfo.getUserName(), loginInfo.getEmail()})) {
				ret = "Success";
			}
		}
		Wrapper wrapper = new Wrapper();
		wrapper.setS(ret);
		return wrapper;
	}
	
	@PostMapping("alreadySubscribed")
	public String alreadySubscribed(@RequestBody String email) {
		String ret = "Failure";
		String[][] data = DbInteraction.executeQuery("select ename from login where email = ?" , new String[] {email.substring(0, email.length()-1)});
		if(data.length != 0 && data[0].length != 0 && data[0][0]!=null) { // no need to check if value of data[0][0] is true because we are setting the value as userName not user.
			ret = "Success";
		}
		return ret;
	}
	
	@PostMapping("getRef")
	public Wrapper getRef(@RequestBody String category) {
		String ret = crossFitService.getRef(category);
		Wrapper wrapper = new Wrapper();
		wrapper.setS(ret);
		return wrapper;
	}
	
	//Didn't used addRef to reduce number of api because hacker can add desired entry without reflecting it on application so undetected attack
	// OHH Enum is there to safe gaurd it
	
	@PostMapping("addRef")
	public Wrapper addRef(@RequestBody Ref ref) {
		String ret = crossFitService.addRef(ref.getKey(), ref.getValue());
		Wrapper wrapper = new Wrapper();
		wrapper.setS(ret);
		return wrapper;
	}
	
	@PostMapping("addEx")
	public Wrapper addExercise(@RequestBody ExerciseChartInfo exChart) { // TODO Map<String, Map<String, String[]>> map
		String ret = crossFitService.addExercise(exChart.getDate(), exChart.getExerciseChart(), exChart.getExerciseDataList());
		Wrapper wrapper = new Wrapper();
		wrapper.setS(ret);
		return wrapper;
	}
	
	@GetMapping("getExDates")
	public MinMaxExDate getExDates() {
		return crossFitService.getExDates();
	}
	
	@PostMapping("getExChart")
	public Wrapper getExChart(@RequestBody String date) {
		String ret = crossFitService.getExChart(date);
		Wrapper wrapper = new Wrapper();
		wrapper.setS(ret);
		return wrapper;
	}
	
	@PostMapping("getMeteredEx")
	public ExerciseData[] getMeteredExercise(@RequestBody String date) {
		return crossFitService.getMeteredExercise(date);
	}
	
	
}
