import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userConnect: any;
  user: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.userConnect = JSON.parse(this.user);
  }

  Deconnexion(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigate([''])
  }

}
