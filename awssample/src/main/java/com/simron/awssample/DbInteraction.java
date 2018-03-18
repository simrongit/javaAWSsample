package com.simron.awssample;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mysql.jdbc.exceptions.jdbc4.CommunicationsException;

/**
 * always create new so that you get new prepared statement to execute
 * @author simro
 *
 */
public class DbInteraction {

	public static void main(String[] args) {
		DbInteraction con = new DbInteraction();
		try {
			con.exeucte();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private static Connection con;
	
	private static Connection getConnection() {
		try {
			if (con == null || con.isClosed()) {
				try {
					Class.forName("com.mysql.jdbc.Driver");
				} catch (ClassNotFoundException e1) {
					e1.printStackTrace();
				}
				con = DriverManager.getConnection("jdbc:mysql://dbinst.crkzu6g3q0vq.us-east-2.rds.amazonaws.com:3306/simdb","root","rootroot");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return con;
	}
	
	/**
	 * @param query
	 * @param parameters
	 * @return for result null check use length check because its never null
	 * String[][] data = executeQuery(..
	 * query = select value from table where key = key
	 * if no row found for key then data.length will be 0
	 * if key found but value is null then data.length = 1 and data[0].length = 1 so you can directly check for data[0][0]
	 * or if key found and value is '' empty string then you will get data[0][0] as empty string
	 */
	public static String[][] executeQuery(String query, String[] parameters) {
		String[][] ret = null;
		try {
			PreparedStatement ps = getConnection().prepareStatement(query);
			for (int i = 0; i < parameters.length; i++) {
				ps.setString(i + 1, parameters[i]);
			}
			ResultSet res = null;
			try {
				res = ps.executeQuery();
			}catch(CommunicationsException e) {
				e.printStackTrace();
				con = null;
				getConnection();
				ps.executeQuery();
			}
			List<String[]> entriesList = new ArrayList<>();
			while(res.next()) {
				String[] entries = new String[res.getMetaData().getColumnCount()];
				entriesList.add(entries);
				for(int i=0; i<entries.length; i++) {
					entries[i] = res.getString(i+1);
				}
			}
			ret = entriesList.toArray(new String[entriesList.size()][]);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ret;
	}
	
	/**
	 * Test ??
	 * 
	 * usage : select 1 from <table> where ..
	 * 
	 * @param query
	 * @param parameters
	 * @return
	 */
	public static boolean isExist(String query, String[] parameters) {
		String[][] ret = executeQuery(query,parameters);
		if(ret.length != 0 && ret[0][0] != null) { // if no result then ret is not null however ret.length is 0, if return is empty then ret[0][0] will be empty string
			return true;
		}
		return false;
	}
	
	/**
	 * @param query
	 * @param parameters
	 * @return it will return number of rows updated, there are some query which return only 0
	 * so if it returns -1 then there is problem otherwise you can use returned value to verify your changes
	 */
	public static int executeUpdate(String query, String[] parameters) {
		int res = -1;
		try {
			PreparedStatement ps = getConnection().prepareStatement(query);
			for (int i = 0; i < parameters.length; i++) {
				ps.setString(i + 1, parameters[i]);
			}
			res = ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return res;
	}
	
	private void exeucte() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e1) {
			e1.printStackTrace();
		}
		String query = "select 1 from dual";
		//length, confirm it? sha-256 will generate 256bit also generated key is 256 = 32bytes = 64hex string
		query="select * from encrypted_passwd_storage where user_id = '?'";
		query = "delete from encrypted_passwd_storage";
		//try(Connection con = DriverManager.getConnection("jdbc:mysql://dbinst.cpvigqtrv4l6.us-east-1.rds.amazonaws.com:3306/simdb","root","rootroot"); ){
		try(Connection con = DriverManager.getConnection("jdbc:mysql://dbinst.cpvigqtrv4l6.us-east-1.rds.amazonaws.com:3306/simdb","root","rootroot"); ){
//			Statement st = con.createStatement();
//			query="create database simdb";
//			query="create table encrypted_passwd_storage (user_id char(64), pass_code char(64), password_text varchar(256), enc_password char(64), constraint pk_user_pc primary key (user_id))";
//			st.executeUpdate(query);
//			st.close();
//			st = con.createStatement();
//			query = "create index encrypted_passwd_storage_1x on encrypted_passwd_storage(user_id, pass_code)";
//			st.executeUpdate(query);
//			st.close();
			
			PreparedStatement ps = con.prepareStatement(query);
//			ResultSet res = ps.executeQuery();
//			res.next();
//			String response = res.getString(1);
//			System.out.println(response);
//			res.close();
			int count = ps.executeUpdate();
			System.out.println(count + " delete count");
			ps.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}
	}
	
	public static int[] executeBatchInsert(String query, String[][] parametersList) {
		int res[] = new int[0];
		try {
			PreparedStatement ps = con.prepareStatement(query);
			for(String[] parameters : parametersList){
				for (int i = 0; i < parameters.length; i++) {
					ps.setString(i + 1, parameters[i]);
				}
				ps.addBatch();
			}
			res = ps.executeBatch();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return res;
	}
	
}
