package com.simron.awssample;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * always create new so that you get new prepared statement to execute
 * @author simro
 *
 */
public class DB {

	public static void main(String[] args) {
		DB con = new DB();
		try {
			con.exeucte();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private void exeucte() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e1) {
			e1.printStackTrace();
		}
		String query = "select 1 from dual";
		query="create table encrypted_passwd_storage (user_id char(64), pass_code char(64), password_text varchar(256), enc_password char(64), constraint pk_user_pc primary key (user_id))";
		query = "create index encrypted_passwd_storage_1x on encrypted_passwd_storage(user_id, pass_code)";
		query = "select count(*) cc from encrypted_passwd_storage";
		//dbinst.cpvigqtrv4l6.us-east-1.rds.amazonaws.com:3306
		//dbinst.crkzu6g3q0vq.us-east-2.rds.amazonaws.com:3306
		try(Connection con = DriverManager.getConnection("jdbc:mysql://dbinst.crkzu6g3q0vq.us-east-2.rds.amazonaws.com:3306/simdb","root","rootroot"); ){
			PreparedStatement ps = con.prepareStatement(query);
			ResultSet res = ps.executeQuery();
			res.next();
			String response = res.getString(1);
			System.out.println(response);
			res.close();
//			ps.executeUpdate(query);
			ps.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}
	}
}
