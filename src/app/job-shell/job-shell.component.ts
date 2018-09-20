import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { JobService } from '../jobdata/job.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-job-shell',
  templateUrl: './job-shell.component.html',
  styleUrls: ['./job-shell.component.css']
})
export class JobShellComponent implements OnInit, OnDestroy {

  postedJobs: any[];
  allPosedJobs: any[];
  cadidatedetails: any[];
  interviewdetails: any[];
  sub: ISubscription;
  displayedColumns: string[] = [ 'name', 'Title', 'Date_Posted', 'Status'];
  dataSource: any[];

  displayedCandidateColumns: string[] = ['name', 'worksat', 'Exp', 'CTC'];
  dataCandidateSource: any[] ;

  displayedInterviewColumns: string[] = ['Interview', 'interviewer', 'Date', 'Result'];
  dataInterviewSource: any[] ;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getAllJobs();
    // this.sub = this.jobService.getAllJobs().subscribe(data => {
    //   jobId = data[0].id;
    //   this.dataSource = data;
    //   this.allPosedJobs = data;
    //   this.jobService.getShortListedCandidate(jobId).subscribe(candidate => {
    //     this.dataCandidateSource = candidate;
    //     this.jobService.getInterviewDetails(candidate[0].id).subscribe(inter => {
    //       this.dataInterviewSource = inter;
    //     });
    //   });
    // });
  }

  getPostedJobs(value: string) {
    // this.dataSource = this.allPosedJobs.filter((jobs) => jobs.Title.toUpperCase().includes(value.toUpperCase()));
  }

  getShortListedCandidate(value: number) {
    // this.jobService.getShortListedCandidate(value).subscribe(data => {
    //   // console.log('From get candidate method' + data);
    //   if (data.length > 0) {
    //     this.dataCandidateSource = data;
    //   } else {
    //   }
    // });

  }

  getCandidateInterviewDetails(value: number) {
    // this.jobService.getInterviewDetails(value).subscribe(data => {
    //   // console.log('From get interview method' + data);
    //   if (data.length > 0) {
    //   this.dataInterviewSource = data;
    //   }
    // });
  }

  checkChanged(checked: boolean, value: string) {
    // console.log(checked , value);

    if (checked && value === 'open') {
      this.dataSource = this.allPosedJobs.filter((jobs) => jobs.Status.toUpperCase().includes(value.toUpperCase()));
    } else if (checked && value === 'closed') {
      this.dataSource = this.allPosedJobs.filter((jobs) => jobs.Status.toUpperCase().includes(value.toUpperCase()));
    } else {
      this.dataSource = this.allPosedJobs;
    }

  }

  ngOnDestroy() {
     // Unsubscribing...
     this.sub.unsubscribe();
  }


}


