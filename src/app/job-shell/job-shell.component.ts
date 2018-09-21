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
    this.jobService.getAllJobs().subscribe(data => {
      this.allPosedJobs = data;

      this.dataSource = data.jobList;
      this.dataCandidateSource = this.jobService.getDataFromDataSet(data.shortListedCandidate, 'jobId', this.dataSource[0].id);
      // tslint:disable-next-line:max-line-length
      this.dataInterviewSource = this.jobService.getDataFromDataSet(data.interviewDetails, 'shrtListId', data.shortListedCandidate[0].jobId);

      // this.dataCandidateSource = data.shortListedCandidate;
      // this.dataInterviewSource = data.interviewDetails;
      console.log(this.dataSource);
    });
  }



  getPostedJobs(value: string) {
    // this.dataSource = this.allPosedJobs.filter((jobs) => jobs.Title.toUpperCase().includes(value.toUpperCase()));
  }

  getShortListedCandidate(value: number) {
    this.dataCandidateSource = this.jobService.getDataFromDataSet(this.allPosedJobs['shortListedCandidate'], 'jobId', value);
    this.dataInterviewSource = this.jobService.getDataFromDataSet(this.allPosedJobs['interviewDetails'], 'shrtListId', value);

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
      this.dataSource = this.allPosedJobs['jobList'].filter((jobs) => jobs.Status.toUpperCase().includes(value.toUpperCase()));
    } else if (checked && value === 'closed') {
      this.dataSource = this.allPosedJobs['jobList'].filter((jobs) => jobs.Status.toUpperCase().includes(value.toUpperCase()));
    } else {
      this.dataSource = this.allPosedJobs['jobList'];
    }
    // tslint:disable-next-line:max-line-length
    this.dataCandidateSource = this.jobService.getDataFromDataSet(this.allPosedJobs['shortListedCandidate'], 'jobId', this.dataSource[0].id);
    if(this.dataCandidateSource[0]){
    // tslint:disable-next-line:max-line-length
     this.dataInterviewSource = this.jobService.getDataFromDataSet(this.allPosedJobs['interviewDetails'], 'shrtListId', this.dataCandidateSource[0].jobId);
    }
  }

  ngOnDestroy() {
     // Unsubscribing...
     // this.sub.unsubscribe();
  }


}


