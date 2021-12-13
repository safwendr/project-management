import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.scss']
})
export class AjouterProjetComponent implements OnInit {

  projectForm = new FormGroup({});

  constructor(
    private projectService: ProjectService,


  ) { }

  ngOnInit(): void {

  }


  submit(){
    console.log(this.projectForm.value);
    this.projectService.ajouterProjet(this.projectForm.value);

  }

}
