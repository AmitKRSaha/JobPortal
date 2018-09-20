import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class JobService {

  public apiHost = './assets/app-data.json';
  alldata;
  jobList;
  shortListedCandidate;
  interviewDetails;


  constructor(
    private http: HttpClient) { }

     /** GET Jobs from the server */
  getAllJobs (): any {
    return this.http.get<any[]>(`${this.apiHost}`).subscribe(data => {
      this.alldata = data;
    });
  }

  // getJobs (value: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.jobsUrl}/?Title=${value}`)
  //     .pipe(
  //       tap(jobs => console.log(jobs)),
  //       catchError(this.handleError('getJobs', []))
  //     );
  // }

  // getShortListedCandidate (value: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.candidateUrl}/?jobId=${value}`)
  //     .pipe(
  //       tap(jobs => console.log(jobs)),
  //       catchError(this.handleError('getShortListedCandidate', []))
  //     );
  // }

  // getInterviewDetails (value: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.intervieweUrl}/?shrtListId=${value}`)
  //     .pipe(
  //       tap(jobs => console.log(jobs)),
  //       catchError(this.handleError('getInterview', []))
  //     );
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  // /** GET Jobs from the server */
  // getAllJobs (): Observable<any[]> {
  //     return of(this.jobList);
  // }

  // getJobs (value: number): Observable<any[]> {
  //   const jobs = this.jobList.filter((job) => job.id === value);

  //   return of(jobs);
  // }

  // getShortListedCandidate (value: number): Observable<any[]> {
  //   const candidates = this.shortListedCandidate.filter((candidate) => candidate.jobId === value);
  //   return of(candidates);
  // }

  // getInterviewDetails (value: number): Observable<any[]> {
  //   const interviews = this.interviewDetails.filter((interview) => interview.shrtListId === value);
  //   return of(interviews);
  // }

}
}

