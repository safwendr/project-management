import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProjetComponent } from './components/ajouter-projet/ajouter-projet.component';
import { DetailsProjetComponent } from './components/details-projet/details-projet.component';
import { ModifierProjetComponent } from './components/modifier-projet/modifier-projet.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { SupprimerProjetComponent } from './components/supprimer-projet/supprimer-projet.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full'},
  { path: 'projects', component: ProjectsListComponent},
  { path: 'ajouter-projet', component: AjouterProjetComponent},
  { path: 'details-projet/:id', component: DetailsProjetComponent},
  { path: 'modifier-projet/:id', component: ModifierProjetComponent},
  { path: 'supprimer-projet/:id', component: SupprimerProjetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
