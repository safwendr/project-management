import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-modifier-projet',
  templateUrl: './modifier-projet.component.html',
  styleUrls: ['./modifier-projet.component.scss']
})
export class ModifierProjetComponent implements OnInit {

  projectId: any;
  projectForm!: FormGroup;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paraMap => {

      if (paraMap.has('id') && paraMap.get('id')) {
        this.projectId = paraMap.get('id');
        this.projectService.detailsProjet(+this.projectId).subscribe(
          res=>{
            this.projectForm = new FormGroup({
              nom: new FormControl(res.nom),
              description: new FormControl(res.description),
              confidentialite: new FormControl(res.confidentialite),
            });
          }
        )}
      })

  }

  submit(){
    console.log(this.projectForm.value);
    this.projectService.modifierProjet( this.projectId, this.projectForm.value);

  }

}
