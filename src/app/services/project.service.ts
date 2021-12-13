import { NumberInput } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Project {
  id?: number;
  nom: string;
  description: string;
  confidentialite: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  backendUrl= 'backend_url_here';

  _projectsList: Project[] = [
    { id: 1, nom: 'Projet 1', description: 'description du projet 1', confidentialite: 'privé'},
    { id: 2, nom: 'Projet 2', description: 'description du projet 2', confidentialite: 'privé'},
    { id: 3, nom: 'Projet 3', description: 'description du projet 3', confidentialite: 'public'},
    { id: 4, nom: 'Projet 4', description: 'description du projet 4', confidentialite: 'public'},
  ]

  constructor(
    private http: HttpClient
  ) { }

  getProjectList(){
    return this.http.get(`backendUrl`);

  }
  ajouterProjet(projet: Project){
    return this.http.post('backendUrl', projet);
  }
  detailsProjet(id: any){
    return this.http.get<{id: any,nom: string, description: string, confidentialite: string}>(`backendUrl/${id}`);

  }
  modifierProjet(id: number, projet: Project){
    return this.http.put(`backendUrl/${id}`, projet);

  }
  supprimerProjet(id: number){
    return this.http.delete(`backendUrl/${id}`);

  }
}
