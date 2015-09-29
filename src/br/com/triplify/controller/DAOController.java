package br.com.triplify.controller;

import java.sql.Connection;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.triplify.dao.ConnectionFactory;

@Controller
public class DAOController {

	@RequestMapping(method = RequestMethod.POST, value="/testMySQLConnection")
	public @ResponseBody String testMySQLConnection(@RequestParam("endpoint") String endpoint, @RequestParam("username") String username, @RequestParam("password") String password) {	
		
		Connection conn = ConnectionFactory.getMySQLConnection(endpoint, username, password);
		if(conn != null) {
			System.out.println("Database Connected!");
			return "true";
		}
		
		return "false";
	}
	
}
