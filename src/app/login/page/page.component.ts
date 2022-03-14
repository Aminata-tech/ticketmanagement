import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private service: TicketService, public router: Router) { }

  ngOnInit(): void {
  }

  Connexion(form: NgForm){
    this.service.authPersonnel(form.value['email'], form.value['password'], 'Admin').subscribe((admin: any)=>{
      if(admin !== null){
        localStorage.setItem('user', JSON.stringify(admin));
        this.router.navigate(['test'])
      }else{
        this.service.authUser(form.value['email'], form.value['password'], 'User').subscribe((user: any)=>{
          if(user !== null){
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['test'])
          }
        })
      }
    })
  }

}
