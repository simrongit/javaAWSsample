package com.simron.utils;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.ConsoleHandler;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.simron.jmx.LoggerFacotoryMBean;

@Service
@Scope(scopeName="singleton") //container level
public class LoggerFactory implements LoggerFacotoryMBean {

	private Handler consoleHandler;
	private Map<String, List<Logger>> appLoggerMap;
	
	public LoggerFactory() {
		init();
	}
	
	//If you need to run some initialization code, you should be able to pull the code in the constructor into a method, and annotate that method with @PostConstruct.
	private void init() {
		consoleHandler = new ConsoleHandler();
		consoleHandler.setLevel(Level.ALL);
		appLoggerMap = new HashMap<>();
	}
	
	/**
	 * If you call getLogger for same class even for different app then also its going to return same logger however it will update map
	 * if this is duplicate call then it will re-enter value in map
	 * @param cls
	 * @param appName
	 * @return
	 */
	public <T> Logger getLogger(Class<T> cls, String appName) {
		Logger logger = Logger.getLogger(cls.getName());
		logger.addHandler(consoleHandler);
		logger.setLevel(Level.INFO);
		appendLogger(logger, appName);
		return logger;
	}

	private void appendLogger(Logger logger, String appName) {
		List<Logger> loggers = appLoggerMap.get(appName);
		if(loggers == null) {
			loggers = new ArrayList<>();
			appLoggerMap.put(appName, loggers);
		}
		loggers.add(logger);
	}
	
	public void debugApp(String appName) {
		appLoggerMap.get(appName).stream().forEach(logger -> logger.setLevel(Level.FINEST));
	}
	
	public void setLogLevel(String appName, String logLevel) {
		Level level = Level.parse(logLevel);
		appLoggerMap.get(appName).stream().forEach(logger -> logger.setLevel(level));
	}
}
