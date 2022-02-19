import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-new-utilisateur',
  templateUrl: './new-utilisateur.component.html',
  styleUrls: ['./new-utilisateur.component.scss']
})
export class NewUtilisateurComponent implements OnInit {

  constructor(private service: TicketService, public router: Router) { }
  ngOnInit(): void {
  }

  ajoutUtilisateur(form: NgForm){
    console.log(form.value);
    if(form.value['password'] == form.value['repeatpassword']){
      this.service.ajoutUtilisateur(form.value).subscribe((data: any)=>{
        this.router.navigate(['liste/personnel']);
      })
    }else{

    }

  
  }

}
