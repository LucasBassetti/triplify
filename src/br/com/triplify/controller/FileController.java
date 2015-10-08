package br.com.triplify.controller;

import java.io.File;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.triplify.service.FileManager;

@Controller
public class FileController {

	@RequestMapping(method = RequestMethod.POST, value="/getConfigurationFile")
	public @ResponseBody String getConfigurationFile() {	
		return FileManager.openConfigurationFileAsString();
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/checkOntologyFileExist")
	public @ResponseBody String checkFileExist() {
		return FileManager.checkOntologyFileExist().toString();
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/createOntologyFile")
	public @ResponseBody void createOntologyFile(@RequestParam("repositories") String repositories, @RequestParam("entities") String entities) {
		File file = FileManager.createOntologyFile("repositories.json");
		FileManager.writeToFile(file, repositories);
		
		file = FileManager.createOntologyFile("entities.json");
		FileManager.writeToFile(file, entities);
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/updateOntologyFile")
	public @ResponseBody String updateOntologyFile(@RequestParam("repositories") String repositories, @RequestParam("entities") String entities) {
		File file = FileManager.createOntologyFile("repositories.json");
		FileManager.writeToFile(file, repositories);
		
		file = FileManager.createOntologyFile("entities.json");
		FileManager.writeToFile(file, entities);
		
		return "OK!";
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/openOntologyRepositoriesFile")
	public @ResponseBody String openOntologyRepositoriesFile() {	
		return FileManager.openOntologyRepositoriesFileAsString();
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/openOntologyEntitiesFile")
	public @ResponseBody String openOntologyEntitiesFile() {	
		return FileManager.openOntologyEntitiesFileAsString();
	}
	
}
