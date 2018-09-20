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

  @Input() opensection;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    let jobId;

    this.sub = this.jobService.getAllJobs().subscribe(data => {
      jobId = data[0].id;
      this.postedJobs = data;
      this.allPosedJobs = this.postedJobs;
      this.opensection.postedJobs = 'open';
      this.opensection.shortListed = 'open';
      this.opensection.interview = 'open';
      this.jobService.getShortListedCandidate(jobId).subscribe(candidate => {
        this.cadidatedetails = candidate;
        this.jobService.getInterviewDetails(candidate[0].id).subscribe(inter => {
          this.interviewdetails = inter;
          this.opensection.interview = 'open';
        });
      });
    });
  }

  getPostedJobs(value: string) {
    this.postedJobs = this.allPosedJobs.filter((jobs) => jobs.Title.toUpperCase().includes(value.toUpperCase()));

    this.opensection.postedJobs = 'open';
      this.opensection.shortListed = 'closed';
      this.opensection.interview = 'closed';
  }

  getShortListedCandidate(value: string) {
    this.jobService.getShortListedCandidate(value).subscribe(data => {
      // console.log('From get candidate method' + data);
      if (data.length > 0) {
        this.cadidatedetails = data;
        this.opensection.shortListed = 'open';
        this.opensection.interview = 'closed';
      } else {
        this.opensection.shortListed = 'closed';
        this.opensection.interview = 'closed';
      }
    });

  }

  getCandidateInterviewDetails(value: string) {
    this.jobService.getInterviewDetails(value).subscribe(data => {
      // console.log('From get interview method' + data);
      if (data.length > 0) {
      this.interviewdetails = data;
      this.opensection.interview = 'open';
      } else {
        this.opensection.interview = 'closed';
      }
    });
  }

  checkChanged(checked: boolean, value: string) {
    // console.log(checked , value);
      this.opensection.postedJobs = 'open';
      this.opensection.shortListed = 'closed';
      this.opensection.interview = 'closed';

    if (checked && value === 'open') {
      this.postedJobs = this.allPosedJobs.filter((jobs) => jobs.Status.toUpperCase().includes(value.toUpperCase()));
    } else if (checked && value === 'closed') {
      this.postedJobs = this.allPosedJobs.filter((jobs) => jobs.Status.toUpperCase().includes(value.toUpperCase()));
    } else {
    this.postedJobs = this.allPosedJobs;
    }

  }

  ngOnDestroy() {
     // Unsubscribing...
     this.sub.unsubscribe();
  }
}
