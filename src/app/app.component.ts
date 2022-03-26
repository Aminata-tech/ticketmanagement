import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticketmanagement';

  user : any;
  admin : any;
  constructor(
    private router : Router
  ){}

  ngOnInit(){
    this.user = localStorage.getItem('user');
    this.admin = JSON.parse(this.user);
    console.log("this admin",this.admin);

    // if (this.admin) {
    //   if(this.admin.typeuser === 'Admin'){
    //     this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
    //     this.router.navigate(['test']));
    //   }else if(this.admin.typeuser === 'User'){
    //     this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
    //     this.router.navigate(['test']));
    //   }
    // }
    
  }
}
