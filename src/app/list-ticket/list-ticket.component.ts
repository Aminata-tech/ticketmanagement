import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent implements OnInit {
  user: any;
  userConnect: any;
  perso1: any = [];
  perso: any = [];
  tous: any = [];
  encours: any = [];
  traites: any = [];
  Atraiter: any = [];

  click = false;
  constructor(private service: TicketService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.userConnect = JSON.parse (this.user);
    

    this.service.listTicket().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].utilisateur.id == this.userConnect.id){
          this.perso1.push(data[i]);
          this.tous.push(data[i]);
        }

        if(data[i].utilisateur.id == this.userConnect.id && data[i].statut == 'encours'){
          this.encours.push(data[i]);
        }

        if(data[i].utilisateur.id == this.userConnect.id && data[i].statut == 'traites'){
          this.traites.push(data[i]);
        }

        if(data[i].utilisateur.id == this.userConnect.id && data[i].statut == 'atraites'){
          this.Atraiter.push(data[i]);
        }
      }
    })
  }

  tickes(tick: any){
    console.log(tick.target.value);
    this.click = false;
    this.perso = [];
    if(tick.target.value == 'Tous' || tick.target.value == ''){
      this.click = true;
      this.perso = this.tous;
      console.log(this.perso);
      
    }

    if(tick.target.value == 'En cours'){
      this.click = true;
      this.perso = this.encours;
    }

    if(tick.target.value == 'Traités'){
      this.click = true;
      this.perso = this.traites;
    }

    if(tick.target.value == 'A Traités'){
      this.click = true;
      this.perso = this.Atraiter;
    }
    
  }

  
  

}
