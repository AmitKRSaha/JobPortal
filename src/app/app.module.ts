import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './jobdata/in-memory-data.service';
import { JobService } from './jobdata/job.service';

import { AppComponent } from './app.component';
import { JobShellComponent } from './job-shell/job-shell.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    JobShellComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [JobService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
