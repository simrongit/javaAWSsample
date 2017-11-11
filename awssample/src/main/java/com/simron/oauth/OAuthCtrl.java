package com.simron.oauth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/oauth")
public class OAuthCtrl {
	
	@Autowired
	private OAuthService oAuthService;
	
	@GetMapping("/gitcallback")
    public void storeGitCode(@RequestParam(value="code", defaultValue="Not found") String code) {
		oAuthService.setGitCode(code);
    }
	
	@GetMapping("/gitcode")
    public void getGitCode() {
		oAuthService.getGitCode();
    }
	

}
