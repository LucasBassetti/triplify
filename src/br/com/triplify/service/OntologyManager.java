package br.com.triplify.service;

import org.semanticweb.owlapi.apibinding.OWLManager;
import org.semanticweb.owlapi.io.SystemOutDocumentTarget;
import org.semanticweb.owlapi.model.IRI;
import org.semanticweb.owlapi.model.OWLOntology;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;
import org.semanticweb.owlapi.model.OWLOntologyManager;
import org.semanticweb.owlapi.model.OWLOntologyStorageException;

public class OntologyManager {

	
	public static void loadOntology() {
		
		IRI iri = IRI.create("http://www.w3.org/2000/01/rdf-schema#");
		
		OWLOntologyManager m = OWLManager.createOWLOntologyManager();
//		OWLDataFactory df = OWLManager.getOWLDataFactory();
		
		try {
			OWLOntology o = m.loadOntologyFromOntologyDocument(iri);
			m.saveOntology(o, new SystemOutDocumentTarget());
		} catch (OWLOntologyCreationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (OWLOntologyStorageException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		
		
	}
	
	
}
