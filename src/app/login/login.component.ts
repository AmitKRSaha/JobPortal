import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginservice: LoginService) { }

  ngOnInit() {
  }

  login(userName: string) {
    this.loginservice.login(userName);
  }
}
