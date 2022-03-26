import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {
user: any;
userConnect: any;
  constructor(private service: TicketService, public router: Router) { }
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.userConnect = JSON.parse (this.user);
  }

  ajoutTicket(form: NgForm){
    console.log(form.value);
    let ticket={
      type_demande: form.value['type_demande'],
      date_envoie: new Date(),
      etat: 'actif',
      statut: 'atraites',
      utilisateur: this.userConnect,
      description: form.value['description']
    }
      this.service.ajoutTicket(ticket).subscribe((data: any)=>{
        this.router.navigate(['list/ticket']);
      })
    }

  }


