package com.simron.vma;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.simron.awssample.DbInteraction;

// vm_data (vm_name, user_id)

// refresh not hacking

@Service
@Scope(scopeName="singleton") //container level
public class VMAllocation {
	
	public static void main(String[] args) {
//		String query = "create table users (user_id char(32), pass_code char(32), constraint pk_user_pc primary key (user_id))";
//		query = "create index users_1x on users(user_id)";
//		query = "create table vm_data (vm_name char(32), user_id char(32), constraint pk_vm_data_pc primary key (vm_name))";
//		query = "create index vm_data_1x on vm_data(vm_name)";
//		System.out.println(DbInteraction.executeUpdate(query, new String[] {}));
		
		VMAllocation vmAllocation = new VMAllocation();
		VMAUser newUser = new VMAUser();
//		newUser.user = "sim";
//		newUser.passwd = "sim";
		newUser.setUserId("admin");
		newUser.setPasswd("admin123!");
		String loggedInUser = vmAllocation.login(newUser);
//		System.out.println(loggedInUser);
		VMInfo vmInfo = new VMInfo(loggedInUser, "simrond01v");
		System.out.println(vmAllocation.addVM(vmInfo));
//		vmInfo = new VMInfo(loggedInUser, "simrond02v");
//		System.out.println(vmAllocation.removeVM(vmInfo));
		vmAllocation.logout(loggedInUser);
		
		
//		String query = "select * from vm_data";
//		String[][] res = DbInteraction.executeQuery(query, new String[] {});
//		System.out.println(res);
	}

	
	/**
	 * @param newUser
	 * @return 64byte string, User exist(This user id is already taken. May be you forgot your password), DB Failure
	 * 
	 */
	public String login(VMAUser newUser) {
		String returnStr = "Success";
		String query = "select pass_code from users where user_id = ?";
		String[][] userResult = DbInteraction.executeQuery(query, new String[] {newUser.getUserId()});
		if(userResult.length == 0 || userResult[0][0].equals(newUser.getPasswd())) {
			// either user not found in db or if found its password matched
			VMInfo vmInfo = new VMInfo();
			String userKey = vmInfo.generateUserKey(newUser.getUserId());
			removeExistingEntryForUser(newUser.getUserId());
			loggedInUsers.put(userKey, newUser.getUserId());
			returnStr = userKey;
			if(userResult.length == 0) {
				query = "insert into users values(?,?)";
				int result = DbInteraction.executeUpdate(query, new String[] {newUser.getUserId(), newUser.getPasswd()});
				if(result == -1) {
					returnStr = "DB Failure";
				}
			}
		}else {
			returnStr = "User exist";
		}
		return returnStr;
	}
	
	private void removeExistingEntryForUser(String user) {
		String userKey = "";
		for(String uKey : loggedInUsers.keySet()) {
			if(user.equals(loggedInUsers.get(uKey))) {
				userKey = uKey;
				break;
			}
		}
		loggedInUsers.remove(userKey);
	}
	
	/**
	 * @param newUser
	 * @return Success, Not logged in, DB Failure
	 */
	public String logout(String userKey) {
		String returnStr = "Success";
		String loggedInUser = loggedInUsers.get(userKey);
		if(loggedInUser == null) {
			returnStr = "Not logged in";
		} else {
			String query = "select 1 from users where user_id = ?";
			boolean loginResult = DbInteraction.isExist(query, new String[] {loggedInUser});
			if(!loginResult) {
				returnStr = "Not logged in";
			} else {
				query = "delete from users where user_id = ?";
				int result = DbInteraction.executeUpdate(query, new String[] {loggedInUser});
				if(result == -1) {
					returnStr = "DB Failure";
				}else {
					loggedInUsers.remove(userKey);
				}
			}
		}
		return returnStr;
	}
	
	public boolean isAdmin(String userKey) {
		String loggedInUser = loggedInUsers.get(userKey);
		if("admin".equals(loggedInUser)) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * @param vmInfo
	 * @return Success, Not logged in(User not logged in, so you bypassed frontend check), Not authorized(If you are not admin, how come you are here), VM exist(This VM exist, how come you bypassed frontend checks)
	 * DB Failure (Oops, backend Failure), VM name not permitted
	 */
	public String addVM(VMInfo vmInfo) {
		String returnStr = "Success";
		String loggedInUser = loggedInUsers.get(vmInfo.getUserKey());
		if(loggedInUser == null) {
			returnStr = "Not logged in";
		} else if(!loggedInUser.equals("admin")){
			returnStr = "Not authorized";
		} else {
			String query = "select 1 from vm_data where vm_name = ?";
			boolean vmExist = DbInteraction.isExist(query, new String[] {vmInfo.getVmName()});
			if(vmExist) {
				returnStr = "VM exist";
			}else if(vmInfo.getVmName().isEmpty() || vmInfo.getVmName().length() > 32) {
				returnStr = "VM name not permitted";
			}else {
				query = "insert into vm_data values(?, ?)";
				int result = DbInteraction.executeUpdate(query, new String[] {vmInfo.getVmName(), ""}); // for one insert result == 1
				if(result == -1) {
					returnStr = "DB Failure";
				}
			}
		}
		return returnStr;
	}
	
	/**
	 * @param vmInfo
	 * @return Success, Not logged in(User not logged in, so you bypassed frontend check), Not authorized(If you are not admin, how come you are here), VM not exist(This VM doesn't exist, how come you bypassed frontend checks)
	 * DB Failure (Oops, backend Failure)
	 */
	public String removeVM(VMInfo vmInfo) {
		String returnStr = "Success";
		String loggedInUser = loggedInUsers.get(vmInfo.getUserKey());
		if(loggedInUser == null) {
			returnStr = "Not logged in";
		} else if(!loggedInUser.equals("admin")){ // only admin name is special, if admin logout then admin can be created with new pass code
			returnStr = "Not authorized";
		} else {
			String query = "select 1 from vm_data where vm_name = ?";
			boolean vmExist = DbInteraction.isExist(query, new String[] {vmInfo.getVmName()});
			if(!vmExist) {
				returnStr = "VM not exist";
			}else {
				query = "delete from vm_data where vm_name = ?";
				int result = DbInteraction.executeUpdate(query, new String[] {vmInfo.getVmName()}); // for one remove result == 1
				if(result == -1) {
					returnStr = "DB Failure";
				}
			}
		}
		return returnStr;
	}
	
	/**
	 * @param vmInfo
	 * @return Success, Not logged in(User not logged in, so you bypassed frontend check), VM not exist, Already allocated, DB Failure
	 */
	public String allocateVM(VMInfo vmInfo) {
		String returnStr = "Success";
		String loggedInUser = loggedInUsers.get(vmInfo.getUserKey());
		if(loggedInUser == null) {
			returnStr = "Not logged in";
		} else {
			String query = "select user_id from vm_data where vm_name = ?";
			String[][] userResult = DbInteraction.executeQuery(query, new String[] {vmInfo.getVmName()});
			if(userResult.length == 0) {
				returnStr = "VM not exist";
			}else if(!userResult[0][0].isEmpty()) {
				returnStr = "Already allocated";
			}else {
				query = "update vm_data set user_id = ? where vm_name = ?";
				int result = DbInteraction.executeUpdate(query, new String[] {loggedInUser, vmInfo.getVmName()});
				if(result == -1) {
					returnStr = "DB Failure";
				}
			}
		}
		return returnStr;
	}
	
	/**
	 * @param vmInfo
	 * @return Success, Not logged in(User not logged in, so you bypassed frontend check), VM not exist, Already released, DB Failure, Locked by other
	 */
	public String releaseVM(VMInfo vmInfo) {
		String returnStr = "Success";
		String loggedInUser = loggedInUsers.get(vmInfo.getUserKey());
		if(loggedInUser == null) {
			returnStr = "Not logged in";
		} else {
			String query = "select user_id from vm_data where vm_name = ?";
			String[][] userResult = DbInteraction.executeQuery(query, new String[] {vmInfo.getVmName()});
			if(userResult.length == 0) {
				returnStr = "VM not exist";
			}else if(userResult[0][0].isEmpty()) {
				returnStr = "Already released";
			}else if(!userResult[0][0].equals(loggedInUser) && !loggedInUser.equals("admin")) {
				returnStr = "Locked by other";
			}else {
				query = "update vm_data set user_id = ? where vm_name = ?";
				int result = DbInteraction.executeUpdate(query, new String[] {"", vmInfo.getVmName()});
				if(result == -1) {
					returnStr = "DB Failure";
				}
			}
		}
		return returnStr;
	}
	
	public List<VMDBInfo> getVMData(){
		List<VMDBInfo> vmList = new ArrayList<>();
		String query = "select * from vm_data"; //  where user_id <> ''
		String[][] result = DbInteraction.executeQuery(query, new String[] {});
		for(int i=0; i<result.length; i++) {
			VMDBInfo vmDBInfo = new VMDBInfo(result[i][0], result[i][1]);
			vmList.add(vmDBInfo);
		}
		return vmList;
	}
	
	/**
	 * to store hash for the user
	 */
	private Map<String, String> loggedInUsers = new HashMap<>();
	

	public class VMDBInfo{
		private String vmName;
		private String user; 
		private VMDBInfo(String aVmName, String aUser) {
			this.vmName = aVmName;
			this.user = aUser;
		}
		public VMDBInfo() {
		}
		public String getVmName() {
			return vmName;
		}
		public void setVmName(String vmName) {
			this.vmName = vmName;
		}
		public String getUser() {
			return user;
		}
		public void setUser(String user) {
			this.user = user;
		}
	}

}
