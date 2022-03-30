import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  tous: any = [];
  encours: any = [];
  nbreEncours: any;
  traites: any = [];
  nbreTraites: any;
  Atraiter: any = [];
  nbreTous: any;
  constructor(private service: TicketService) { }

  ngOnInit(): void {
    this.service.listTicket().subscribe((data: any)=>{

      for(let i = 0; i< data.length; i++){
        if(data[i].statut == 'encours'){
          this.encours.push(data[i]);
        }

        if(data[i].statut == 'traites'){
          this.traites.push(data[i]);
        }
      }
      this.nbreTous = data.length
      this.nbreEncours = this.encours.length;
      this.traites = this.traites.length;
    })
  }

}
