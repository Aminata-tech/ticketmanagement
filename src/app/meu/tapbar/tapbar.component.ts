import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tapbar',
  templateUrl: './tapbar.component.html',
  styleUrls: ['./tapbar.component.scss']
})
export class TapbarComponent implements OnInit {
user: any;
userConnect: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.userConnect = JSON.parse (this.user);
  }

  Deconnexion(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigate([''])
  }

}
