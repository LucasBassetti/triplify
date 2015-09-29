package br.com.triplify.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

	
	public static Connection getMySQLConnection(String endpoint, String username, String password) {
		
		if(!endpoint.contains("jdbc:mysql://")) {
			endpoint = "jdbc:mysql://" + endpoint;
		}
		
		return ConnectionFactory.getConnection(endpoint, username, password);
	}
	
    private static Connection getConnection(String endpoint, String username, String password) {
        try {
        	Class.forName("com.mysql.jdbc.Driver");
            return DriverManager.getConnection(endpoint, username, password);
        } catch (SQLException e) {
//        	e.printStackTrace();
        	System.out.println("Connection Fail!");
        } catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
//			e.printStackTrace();
        	System.out.println("Connection Fail!");
		}
        
        return null;
    }
	
}
