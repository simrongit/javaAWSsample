package com.simron.weightLoggin;

import java.util.Date;

public class WeightInfo {
	
	private Date date;
	private String userId;
	private WeightTime weightTime;
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public WeightTime getWeightTime() {
		return weightTime;
	}
	public void setWeightTime(WeightTime weightTime) {
		this.weightTime = weightTime;
	}
}
