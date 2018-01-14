package com.simron.awssample;

import java.text.SimpleDateFormat;
import java.util.Date;

public class SimpleDateFormatExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(System.currentTimeMillis());
		System.out.println((new Date()).getTime());
		SimpleDateFormat sd = new SimpleDateFormat("EEE MMM dd YYYY");
		System.out.println(sd.format(System.currentTimeMillis()));
	}

}
