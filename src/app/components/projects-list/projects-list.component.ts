import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, ProjectService } from 'src/app/services/project.service';




@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  myProjectList: Project[] = [];
  displayedColumns: string[] = ['id', 'nom', 'description', 'confidentialite', 'actions'];
  dataSource: any = this.myProjectList;
  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.myProjectList = this.projectService._projectsList;
    this.dataSource = this.myProjectList;
  }

  detailsProject(id: any){
    this.router.navigateByUrl(`/details-projet/${id}`);
  }
  modifierProject(id: any){
    this.router.navigateByUrl(`/modifier-projet/${id}`);

  }
  supprimerProject(id: any){
    this.projectService.supprimerProjet(id);
    this.projectService.getProjectList();
  }
}
