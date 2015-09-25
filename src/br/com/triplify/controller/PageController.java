package br.com.triplify.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PageController {

	@RequestMapping(method = RequestMethod.GET, value="/index")
	public String index()
	{	
		return "pages/dashboard/index";
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/painel")
	public String painel()
	{	
		return "pages/triplify/painel";
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/repository")
	public String repository()
	{	
		return "pages/triplify/repository";
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/database")
	public String database()
	{	
		return "pages/triplify/database";
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/configuration")
	public String configuration()
	{	
		return "pages/configuration/configuration";
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/documentation")
	public String documentation()
	{	
		return "pages/documentation/documentation";
	}
}
