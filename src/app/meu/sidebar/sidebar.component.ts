import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userConnect: any;
  user: any;
  constructor() { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.userConnect = JSON.parse(this.user);
  }

}
