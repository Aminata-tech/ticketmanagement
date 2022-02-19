import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-liste-personnel',
  templateUrl: './liste-personnel.component.html',
  styleUrls: ['./liste-personnel.component.scss']
})
export class ListePersonnelComponent implements OnInit {
perso: any;
  constructor(private service: TicketService) { }

  ngOnInit(): void {
    this.service.listPersonnel().subscribe((data: any)=>{
      this.perso = data;
    })
  }

}
