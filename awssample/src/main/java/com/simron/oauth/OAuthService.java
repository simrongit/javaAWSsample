package com.simron.oauth;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Scope(scopeName = "singleton")
public class OAuthService {

	private String gitCode = "blank";
	private String token = "blank";

	private String clientId = "66e7f15d28f2db6af2fe";
	private String clientSecret = "d2e4fc7dfce452639e117d31ecf569a5a95b61ef";
	private String redirectUri = "http://localhost:4200/oa";
	private String generalUri = "http://sim.io";

	public String getGitCode() {
		RestTemplate restTemplate = new RestTemplate();
		String res = restTemplate.getForObject("http://github.com/login/oauth/access_token" + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret + "&code=" + this.gitCode + "&redirect_uri=" + this.redirectUri, String.class);
		this.token = res;
		System.out.println(gitCode + "  " + token);
		return gitCode;
	}

	public void setGitCode(String gitCode) {
		this.gitCode = gitCode;
	}

}
