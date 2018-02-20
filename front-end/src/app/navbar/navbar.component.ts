import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _auth: UserAuthService) { }

  ngOnInit() {
  }

  logout(): void {
    this._auth.isAuthenticated = false;
  }

}
