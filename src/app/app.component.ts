import { Component, OnInit } from '@angular/core';
import { JobService } from './jobdata/job.service';
import { LoginService } from './login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JobConsultantPortal';
  pageTitle = 'Company Name';

  loggedIn = false;

  constructor(private toastr: ToastrService, private jobService: JobService, public loginService: LoginService) {
  }

  ngOnInit() {
    this.showSuccess('Please put any user name and password');
  }

  logOut() {
    this.showSuccess('You are logged out');
    this.loginService.logout();
  }

  showSuccess(valueToShow: string) {
    this.toastr.success(valueToShow);
  }
}
