import { Injectable } from '@angular/core';
import {IUser, User} from './user';

@Injectable()
export class UserAuthService {

  currentUser: IUser;

  isAuthenticated: boolean = false;

  constructor() { }

  loginUser(userName: string, password: string): IUser {
    let resultUser = new User();
    resultUser.setId(1);
    resultUser.setEmail("test@test.pl");
    resultUser.setPassword("test");
    resultUser.setUserName("testowy User");

    this.isAuthenticated = true;
    this.currentUser = resultUser;

    return resultUser;

  }

}
