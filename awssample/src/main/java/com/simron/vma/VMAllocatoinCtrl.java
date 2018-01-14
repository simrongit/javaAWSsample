package com.simron.vma;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simron.utils.CustomExceptionStr;
import com.simron.utils.MandatoryInputs;

@RestController
@RequestMapping("/vma")
public class VMAllocatoinCtrl {
	
	@Autowired
	private VMAllocation vmAllocationTool;

    @PostMapping("/login")
    public String login(@RequestBody VMAUser user) {
    	MandatoryInputs.stringStr(user.getUserId(), "User Id");
    	MandatoryInputs.stringStr(user.getPasswd(), "Pass code");
    	String returnStr = vmAllocationTool.login(user);
    	if(returnStr.length() != 64) {
    		throw new CustomExceptionStr(returnStr);
    	}
        return returnStr;
    }

    @PostMapping("/logout")
    public String logout(@RequestBody String userKey) {
    	MandatoryInputs.stringStr(userKey, "User Key", 64);
    	String returnStr = vmAllocationTool.logout(userKey);
    	if(!returnStr.equals("Success")) {
    		throw new CustomExceptionStr(returnStr);
    	}
        return returnStr;
    }
    
    @GetMapping("/getAllVMs")
    public List<VMAllocation.VMDBInfo> getVMs(){
    	List<VMAllocation.VMDBInfo> listOfVms = vmAllocationTool.getVMData();
    	return listOfVms;
    }


    @PostMapping("/allocateVM")
    public String lockVM(@RequestBody VMInfo vmInfo) {
    	MandatoryInputs.stringStr(vmInfo.getUserKey(), "User Key", 64);
    	MandatoryInputs.string(vmInfo.getVmName(), "VM Name");
    	String returnStr = vmAllocationTool.allocateVM(vmInfo);
    	if(!returnStr.equals("Success")) {
    		throw new CustomExceptionStr(returnStr);
    	}
        return returnStr;
    }
    
    @PostMapping("/freeVM")
    public String releaseVM(@RequestBody VMInfo vmInfo) {
    	MandatoryInputs.stringStr(vmInfo.getUserKey(), "User Key", 64);
    	MandatoryInputs.string(vmInfo.getVmName(), "VM Name");
    	String returnStr = vmAllocationTool.releaseVM(vmInfo);
    	if(!returnStr.equals("Success")) {
    		throw new CustomExceptionStr(returnStr);
    	}
        return returnStr;
    }
    
    @PostMapping("/addNewVM")
    public String addVM(@RequestBody VMInfo vmInfo) {
    	MandatoryInputs.stringStr(vmInfo.getUserKey(), "User Key", 64);
    	MandatoryInputs.string(vmInfo.getVmName(), "VM Name");
    	String returnStr = vmAllocationTool.addVM(vmInfo);
    	if(!returnStr.equals("Success")) {
    		throw new CustomExceptionStr(returnStr);
    	}
        return returnStr;
    }

    @PostMapping("/remVM")
    public String remVM(@RequestBody VMInfo vmInfo) {
    	MandatoryInputs.stringStr(vmInfo.getUserKey(), "User Key", 64);
    	MandatoryInputs.stringStr(vmInfo.getVmName(), "VM Name");
    	String returnStr = vmAllocationTool.removeVM(vmInfo);
    	if(!returnStr.equals("Success")) {
    		throw new CustomExceptionStr(returnStr);
    	}
        return returnStr;
    }

    @PostMapping("/admin")
    public boolean isAdmin(@RequestBody String userKey) {
    	MandatoryInputs.stringStr(userKey, "User Key", 64);
    	return vmAllocationTool.isAdmin(userKey);
    }
}
