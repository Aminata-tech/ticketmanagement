import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-encours',
  templateUrl: './encours.component.html',
  styleUrls: ['./encours.component.scss']
})
export class EncoursComponent implements OnInit {

  user: any;
  userConnect: any;
 
  perso: any = [];
  

  click = false;
  constructor(private service: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.userConnect = JSON.parse (this.user);

    this.service.listTicket().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].statut == 'encours'){
          this.perso.push(data[i]);
        }
      }
    })
  }

  valider(id: any){
    this.service.detailTicket(id).subscribe((ticket: any)=>{
      console.log(ticket);
      ticket.statut = 'traites';
      this.service.updateTicket(id, ticket).subscribe((data: any)=>{
        console.log(data);
        
        window.location.reload();
        this.router.navigateByUrl('ticket/encours', {skipLocationChange: true}).then(()=>
        this.router.navigate(['ticket/encours']));
      })
      
    })
  }
  rejeter(id: any){
    this.service.detailTicket(id).subscribe((ticket: any)=>{
      console.log(ticket);
      ticket.statut = 'traites';
      this.service.updateTicket(id, ticket).subscribe((data: any)=>{
        console.log(data);
        
        window.location.reload();
        this.router.navigateByUrl('ticket/encours', {skipLocationChange: true}).then(()=>
        this.router.navigate(['ticket/encours']));
      })
      
    })
  }


  
  

}

  
  


