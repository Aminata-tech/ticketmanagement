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

  constructor(private service: TicketService, public router: Router) { }
  ngOnInit(): void {
  }

  ajoutTicket(form: NgForm){
    console.log(form.value);
  
      this.service.ajoutTicket(form.value).subscribe((data: any)=>{
        this.router.navigate(['liste/personnel']);
      })
    }

  }


