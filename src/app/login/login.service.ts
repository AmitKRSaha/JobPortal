import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {

  loggedIn = false;
  user: string;

  login(userName) {
    console.log(userName);
    this.loggedIn = true;
    this.user = userName;
  }

  logout() {
    this.loggedIn = false;
    this.user = null;
  }
}
