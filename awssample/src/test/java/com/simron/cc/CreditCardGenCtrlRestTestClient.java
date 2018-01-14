package com.simron.cc;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.simron.domain.CodeValue;

@Service
public class CreditCardGenCtrlRestTestClient {
	private final RestTemplate restTemplate;

	public CreditCardGenCtrlRestTestClient(RestTemplateBuilder restTemplateBuilder) {
		restTemplate = restTemplateBuilder.build();
	}

	public CodeValue[] getUserDetails() {
		return restTemplate.getForObject("/getCCType", CodeValue[].class);
	}
}