package com.simron.weightLoggin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simron.utils.CustomException;
import com.simron.utils.MandatoryInputs;

@RestController
@RequestMapping("/lw")
public class LogWeightCtrl {

	@Autowired
	private LogWeight logWeight;
	
	@PostMapping("/lastEntry")
	public WeightTime getRecentEntry(@RequestBody String userId) {
		MandatoryInputs.string(userId, "User Id");
		WeightTime weightTime = logWeight.getLastEntry(userId);
		return weightTime;
	}

	@PostMapping("/allEntries")
	public List<WeightInfo> getAllEntries(@RequestBody String userId) {
		MandatoryInputs.string(userId, "User Id");
		List<WeightInfo> weightInfoList = logWeight.getHistory(userId);
		return weightInfoList;
	}
	
	@PostMapping("/createEntry")
	public boolean createEntry(@RequestBody WeightInfo weightInfo) {
		MandatoryInputs.string(weightInfo.getUserId(), "User Id");
		int result = logWeight.storeWeightInfo(weightInfo);
		if(result == 1) {
			return true;
		}else {
			throw new CustomException("DB Failure");
		}
	}
}
