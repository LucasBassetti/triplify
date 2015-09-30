package br.com.triplify.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintStream;

public class FileManager {

	public static String 	path;
	
	public static String 	configurationFolder,	// database and triple-store configuration
							repositoryFolder,		// triplify scripts
							ontologyFolder;			// ontology repository
	
	public void setPath(String path) {
		
		FileManager.path = System.getProperty("user.home") + path + "/triplify/";
		
		FileManager.configurationFolder = FileManager.path + "configuration/";
		FileManager.repositoryFolder = FileManager.path + "repository/";
		FileManager.ontologyFolder = FileManager.path + "ontology/";
		
		// if SO = Windows
		if(System.getProperty("os.name").contains("Windows")){
			FileManager.configurationFolder = FileManager.replaceSlash(FileManager.configurationFolder);
			FileManager.repositoryFolder = FileManager.replaceSlash(FileManager.repositoryFolder);
			FileManager.ontologyFolder = FileManager.replaceSlash(FileManager.ontologyFolder);
		}
		
		FileManager.createRepository(FileManager.configurationFolder);
		FileManager.createRepository(FileManager.repositoryFolder);
		FileManager.createRepository(FileManager.ontologyFolder);
		
		FileManager.createConfigurationFile("configuration.json");
	}
	
	/**
	 * Procedure to replace slash.
	 * @param path
	 */
	public static String replaceSlash(String value){
		if(System.getProperty("os.name").contains("Windows")){		
			return value = value.replaceAll("/", "\\\\");
		}
		
		return value;
	}
	
	/**
	 * Procedure to create folders if they do not exist.
	 * @param path
	 */
	private static void createRepository(String path){
		
		File file = new File(path);
		if (!file.exists()) {
			if (file.mkdirs()) {
				System.out.println("Directory is created!");
			} else {
				System.out.println("Failed to create directory!");
			}
		}
		
	}
	
	public static Boolean checkOntologyFileExist() {
		return FileManager.checkFileExist(FileManager.ontologyFolder + "repositories.json");
	}
	
	/**
	 * Generic procedure to check if file already exist in repository.
	 * @param filename
	 * @return
	 */
	private static Boolean checkFileExist(String path){
		
		File f = new File(path);
		if(f.exists()){
			return true;
		}
		
		return false;
	}
	
	private static void createConfigurationFile(String filename) {
		
		String content = "{ " 
				+ "\"databases\": [{"
				+ "\"name\": \"mysql\", "
				+ "\"endpoint\": \"localhost\", "
				+ "\"username\": \"root\", "
				+ "\"password\": \"root\" "
				+ "}], "
				+ "\"tripleStores\": [{"
				+ "\"name\": \"stardog\", "
				+ "\"endpoint\": \"http://localhost:5820\", "
				+ "\"username\": \"admin\", "
				+ "\"password\": \"admin\" "
				+ "}] "
				+ "}";
		
		if(!FileManager.checkFileExist(FileManager.configurationFolder + filename)) {
			File file = FileManager.createFile(FileManager.configurationFolder, filename);
			FileManager.writeToFile(file, content);
		}
		
	}
	
	public static File createOntologyFile(String filename) {
		 return FileManager.createFile(FileManager.ontologyFolder, filename);
	}
	
	/** 
	 * Generic Procedure for creating a File.
	 * @param path
	 * @param filename
	 * @return
	 */
    private static File createFile (String path, String filename) 
    {    	
		File file = new File(path + filename);		
		if (!file.exists()) {	
			try{
				file.createNewFile();
			}catch(IOException e){
				e.printStackTrace();
			}
		}
		return file;
	}
	
    /**
     * Procedure for write a String content in a File.
     * @param file
     * @param content
     * @throws IOException
     */
    public static void writeToFile (File file, String content)
   	{
		try {
			PrintStream printStream = new PrintStream(file);
			printStream.print(content);
			printStream.close();		
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
   	}
	
    /**
     * 
     * @return
     */
	public static String openConfigurationFileAsString() {
		return FileManager.openFileAsString(FileManager.configurationFolder, "configuration.json");
	}
	
	public static String openOntologyRepositoriesFileAsString() {
		return FileManager.openFileAsString(FileManager.ontologyFolder, "repositories.json");
	}
	
	public static String openOntologyEntitiesFileAsString() {
		return FileManager.openFileAsString(FileManager.ontologyFolder, "entities.json");
	}
	
	/**
     * Generic procedure to open a file as String.
     * @param filename
     * @return
     */
    private static String openFileAsString(String path, String filename){
    	
    	String content = "";
    	
		try {
 
			String line;
			
			BufferedReader br = new BufferedReader(new FileReader(path + filename));
			
			while ((line = br.readLine()) != null) {
				content = content + line;
			}
			
			br.close();
 
		} catch (IOException e) {
			//e.printStackTrace();
		}
		
		return content;
    	
    }
	
}
