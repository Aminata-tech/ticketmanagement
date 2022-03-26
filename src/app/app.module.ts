import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './meu/sidebar/sidebar.component';
import { TapbarComponent } from './meu/tapbar/tapbar.component';
import { NewPersonnelComponent } from './new-personnel/new-personnel.component';
import { ListePersonnelComponent } from './liste-personnel/liste-personnel.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { NewUtilisateurComponent } from './new-utilisateur/new-utilisateur.component';

import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { PageComponent } from './login/page/page.component';
import { AtraitesComponent } from './atraites/atraites.component';
import { EncoursComponent } from './encours/encours.component';
import { TraitesComponent } from './traites/traites.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SidebarComponent,
    TapbarComponent,
    NewPersonnelComponent,
    ListePersonnelComponent,
    CreateTicketComponent,
    ListeUtilisateurComponent,
    NewUtilisateurComponent,
    PageComponent,
  
    ListTicketComponent,
       WorkflowComponent,
       AtraitesComponent,
       EncoursComponent,
       TraitesComponent,
       AcceuilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
