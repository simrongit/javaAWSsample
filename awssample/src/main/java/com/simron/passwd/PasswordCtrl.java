package com.simron.passwd;

import java.util.logging.Logger;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simron.utils.LoggerFactory;

@RestController
public class PasswordCtrl {

	@Autowired
	private LoggerFactory loggerFactory;
	
	private Logger logger;
	
	@PostConstruct
	private void init() {
		logger = loggerFactory.getLogger(PasswordCtrl.class, "passwordApp");
	}
	
	@Autowired
	private Password passwordTool;

    @PostMapping("/generatePasswd")
    public PasswordInfo genPasswd(@RequestBody PasswordInfo passwdInfo) {
    	logger.info("Password Generation Called");
    	passwordTool.generatePassword(passwdInfo);
        return passwdInfo;
    }
    
    @PostMapping("/decryptPasswd")
    public PasswordInfo decPasswd(@RequestBody PasswordInfo passwdInfo) {
    	passwordTool.decryptPassword(passwdInfo);
        return passwdInfo;
    }
}
