import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { jobList, interviewDetails, shortListedCandidate } from './app-data';

@Injectable({ providedIn: 'root' })
export class JobService {

  public jobsUrl = 'api/jobs';  // URL to web api
  public candidateUrl = 'api/shortListedCandidate';
  public intervieweUrl = 'api/interviewDetails';


  constructor(
    private http: HttpClient) { }

  /** GET Jobs from the server */
  getAllJobs (): Observable<any[]> {
      return of(jobList);
  }

  getJobs (value: number): Observable<any[]> {
    const jobs = jobList.filter((job) => job.id === value);

    return of(jobs);
  }

  getShortListedCandidate (value: number): Observable<any[]> {
    const candidates = shortListedCandidate.filter((candidate) => candidate.jobId === value);
    return of(candidates);
  }

  getInterviewDetails (value: number): Observable<any[]> {
    const interviews = interviewDetails.filter((interview) => interview.shrtListId === value);
    return of(interviews);
  }

}

