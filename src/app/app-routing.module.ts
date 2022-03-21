import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtraitesComponent } from './atraites/atraites.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { EncoursComponent } from './encours/encours.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { ListePersonnelComponent } from './liste-personnel/liste-personnel.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { PageComponent } from './login/page/page.component';
import { NewPersonnelComponent } from './new-personnel/new-personnel.component';
import { NewUtilisateurComponent } from './new-utilisateur/new-utilisateur.component';
import { TestComponent } from './test/test.component';
import { TraitesComponent } from './traites/traites.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  {
    path:"test",
    component:TestComponent
  },
  {
    path:"new/personnel",
    component:NewPersonnelComponent
  },
  {
    path:"liste/personnel",
    component:ListePersonnelComponent
  },
  {
    path:"new/utilisateur",
    component:NewUtilisateurComponent
  },
  {
    path:"liste/utilisateur",
    component:ListeUtilisateurComponent
  },
  {
    path:"create/ticket",
    component:CreateTicketComponent
  },
  {
    path:"list/ticket",
    component:ListTicketComponent
  },
  {
    path:"ticket/atraites",
    component:AtraitesComponent
  },
  {
    path:"ticket/traites",
    component:TraitesComponent
  },
  {
    path:"ticket/encours",
    component:EncoursComponent
  },
  {
    path:"workflow",
    component:WorkflowComponent
  },
  {
    path:"",
    component:PageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
