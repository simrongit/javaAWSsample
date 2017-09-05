package com.simron.jmx;

import org.springframework.context.annotation.EnableMBeanExport;

@EnableMBeanExport
public interface LoggerFacotoryMBean {

	public void debugApp(String appName);
	
	public void setLogLevel(String appName, String logLevel);
	
}
