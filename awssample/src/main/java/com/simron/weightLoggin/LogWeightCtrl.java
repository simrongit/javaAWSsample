package com.simron.weightLoggin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simron.domain.Wrapper;
import com.simron.utils.CustomException;
import com.simron.utils.MandatoryInputs;

@RestController
@RequestMapping("/lw")
public class LogWeightCtrl {

	@Autowired
	private LogWeight logWeight;
	
	@PostMapping("/lastEntry")
	public WeightInfo getRecentEntry(@RequestBody String userId) {
		MandatoryInputs.string(userId, "User Id");
		WeightInfo weightInfo = logWeight.getLastEntry(userId);
		return weightInfo;
	}

	@PostMapping("/allEntries")
	public List<WeightInfo> getAllEntries(@RequestBody String userId) {
		MandatoryInputs.string(userId, "User Id");
		List<WeightInfo> weightInfoList = logWeight.getHistory(userId);
		return weightInfoList;
	}
	
	@PostMapping("/createEntry")
	//damn, need to introduce wrapper so that stupid volley JsonObjectRequest can handle it
	//org.json.JSONException: Value true of type java.lang.Boolean cannot be converted to JSONObject
	public Wrapper createEntry(@RequestBody WeightInfo weightInfo) {
		MandatoryInputs.string(weightInfo.getUserId(), "User Id");
//		int result = logWeight.storeWeightInfo(weightInfo);
//		if(result == 1) {
			Wrapper wrapper = new Wrapper();
			wrapper.setB(true);
			return wrapper;
//		}else {
//			throw new CustomException("DB Failure");
//		}
	}
}
