import { Component, OnInit } from '@angular/core';
import {IUser, User} from '../user';
import {UserAuthService} from '../user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = new User;

  constructor(private _userAuth: UserAuthService, private _router: Router) { }

  ngOnInit() {

  }

  login(formValues): void {
    console.log(formValues);
    this.user = this._userAuth.loginUser(formValues.userName, formValues.password);
    console.log(this.user.userName);
    console.log(this.user.password);
  }

  cancel(): void {
    this._router.navigate(['/welcome']).catch();
  }

}
