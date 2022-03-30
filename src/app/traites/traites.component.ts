import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-traites',
  templateUrl: './traites.component.html',
  styleUrls: ['./traites.component.scss']
})
export class TraitesComponent implements OnInit {

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
        if(data[i].statut== 'traites' || data[i].statut== 'rejeter'){
          this.perso.push(data[i]);
        }
      }
    })
  }

  encours(id: any){
    this.service.detailTicket(id).subscribe((ticket: any)=>{
      console.log(ticket);
      ticket.statut = 'encours';
      this.service.updateTicket(id, ticket).subscribe((data: any)=>{
        console.log(data);
        
        window.location.reload();
        this.router.navigateByUrl('ticket/traites', {skipLocationChange: true}).then(()=>
        this.router.navigate(['ticket/traites']));
      })
      
    })
  }



  
  

}

  
  


