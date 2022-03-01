import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent implements OnInit {

  perso: any;
  constructor(private service: TicketService) { }

  ngOnInit(): void {
    this.service.listTicket().subscribe((data: any)=>{
      this.perso = data;
      console.log(this.perso);
      
    })
  }


  
  

}
