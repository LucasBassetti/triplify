package br.com.triplify.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PageController {

//	@RequestMapping(method = RequestMethod.GET, value="/index")
//	public String index() {	
//		return "pages/dashboard/index";
//	}
	
	@RequestMapping(method = RequestMethod.GET, value="/index")
	public String index() {	
		return "app/index";
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/test")
	public String test() {	
		return "app/test/SpecRunner";
	}
	
}
