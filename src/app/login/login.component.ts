import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginservice: LoginService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  login(userName: string) {
    this.loginservice.login(userName);
    this.showSuccess(`Hey ${userName}! You are logged In`);
  }

  showSuccess(valueToShow: string) {
    this.toastr.success(valueToShow);
  }
}
