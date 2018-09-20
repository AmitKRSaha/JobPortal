import { Component, OnInit } from '@angular/core';
import { JobService } from './jobdata/job.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JobConsultantPortal';
  pageTitle = 'Company Name';

  loggedIn = false;

  opensection = {
    postedJobs: 'closed',
    shortListed: 'closed',
    interview: 'closed'
  };

  constructor(private jobService: JobService, public loginService: LoginService) {
  }

  ngOnInit() {

  }

  logOut() {
    this.loginService.logout();
  }
}
