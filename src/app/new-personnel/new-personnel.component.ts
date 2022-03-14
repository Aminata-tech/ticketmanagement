import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-new-personnel',
  templateUrl: './new-personnel.component.html',
  styleUrls: ['./new-personnel.component.scss']
})
export class NewPersonnelComponent implements OnInit {

  constructor(private service: TicketService, public router: Router) { }

  ngOnInit(): void {
  }

  ajoutPersonnel(form: NgForm): void{
    console.log(form.value);
    if(form.value['password'] == form.value['repeatpassword']){
      this.service.ajoutPersonnel(form.value).subscribe((data: any)=>{
          this.router.navigate(['liste/personnel']);
      })
    }else{

    }
    
  }

}
