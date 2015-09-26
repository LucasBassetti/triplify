package br.com.triplify.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.triplify.service.FileManager;

@Controller
public class FileController {

	@RequestMapping(method = RequestMethod.POST, value="/getConfigurationFile")
	public @ResponseBody String getConfigurationFile()
	{	
		return FileManager.openConfigurationFileAsString();
	}
	
}
