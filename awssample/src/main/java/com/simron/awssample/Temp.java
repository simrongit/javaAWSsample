package com.simron.awssample;

import java.util.Optional;

public class Temp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int var1 = 0;
		int var2 = ~var1;
		System.out.println(var1+" "+var2);
		for(int i=0;i<2;++i) {
			System.out.println(i);
		}
		
		String str = null;
		Optional<String> s = Optional.ofNullable(str);
		System.out.println(s.toString());
		A aa = null;
		Optional<A> a = Optional.ofNullable(aa);
		System.out.println(a.get().s2);
	}
	
	private class B{
		String s1;
	}
	
	private class A{
		String s2;
		B b;
	}

}
