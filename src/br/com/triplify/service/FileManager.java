package br.com.triplify.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintStream;

public class FileManager {

	public static String 	path;
	
	public static String 	configurationFolder,
							repositoryFolder,
							ontologyFolder;
	
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
		
		FileManager.createConfigurationFile(FileManager.configurationFolder);
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
	
	private static void createConfigurationFile(String path) {
		
		String content = "{ " 
				+ "\"databases\": [{"
				+ "\"name\": \"mysql\", "
				+ "\"endpoint\": \"http://localhost\", "
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
		
		File file = new File(path + "configuration.json");
		if (!file.exists()) {
			try{
				file.createNewFile();
				PrintStream printStream = new PrintStream(file);
				printStream.print(content);
				printStream.close();
			}catch(IOException e){
				e.printStackTrace();
			}
		}
		
	}
	
	public static String openConfigurationFileAsString() {
		return FileManager.openFileAsString(FileManager.configurationFolder, "configuration.json");
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
