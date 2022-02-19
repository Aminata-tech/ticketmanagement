import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {
  perso: any;
  constructor(private service: TicketService) { }

  ngOnInit(): void {
    this.service.listUtilisateur().subscribe((data: any)=>{
      this.perso = data;
    })
  }
  

  
  }