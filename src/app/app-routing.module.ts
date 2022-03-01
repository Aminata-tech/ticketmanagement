import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { ListePersonnelComponent } from './liste-personnel/liste-personnel.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { NewPersonnelComponent } from './new-personnel/new-personnel.component';
import { NewUtilisateurComponent } from './new-utilisateur/new-utilisateur.component';
import { TestComponent } from './test/test.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
