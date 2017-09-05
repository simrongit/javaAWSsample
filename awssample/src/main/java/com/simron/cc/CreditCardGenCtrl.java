package com.simron.cc;

import java.util.Arrays;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simron.domain.CodeValue;

@RestController
public class CreditCardGenCtrl {

	@PostMapping("/generateCC")
    public String genPasswd(@RequestBody Integer ccType) {
		String ccNumber = "";
		Integer[] arr = new Integer[15];
		if(ccType == 1) {
			arr[0] = 4;
			int counter = 1;//as 0 is set
			while (counter != arr.length) {
				Double d = Math.random() * 10;
				arr[counter] = d.intValue();
				++counter;
			}
		}
		Integer checkDigit = luhnAlgoModulo10(arr.clone());
		ccNumber = Arrays.stream(arr).map(t -> t.toString()).collect(Collectors.joining());
        return ccNumber+checkDigit;
    }
	
	@GetMapping("/getCCType")
    public CodeValue[] getCreditCardTypes() {
        return CodeValue.getCCCodeValue();
    }
    
	public static Integer luhnAlgoModulo10(Integer[] arr) {
		for(int i=0; i<arr.length; i+=2) {
			arr[i] = arr[i]*2;
			if(arr[i]/10 > 0) {
				arr[i] = arr[i]/10 + arr[i]%10;
			}
		}
		int sumOfDigits = 0;
		for(int i=0; i<arr.length; i++) {
			sumOfDigits += arr[i];
		}
		int sumOfDigitsX9 = sumOfDigits*9;
		return sumOfDigitsX9%10;
	}
}
