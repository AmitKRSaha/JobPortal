import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class JobService {

  public jobsUrl = 'api/jobs';  // URL to web api
  public candidateUrl = 'api/shortListedCandidate';
  public intervieweUrl = 'api/interviewDetails';


  constructor(
    private http: HttpClient) { }

  /** GET Jobs from the server */
  getAllJobs (): Observable<any[]> {
    return this.http.get<any[]>(`${this.jobsUrl}`)
      .pipe(
        tap(jobs => console.log(jobs)),
        catchError(this.handleError('getAllJobs', []))
      );
  }

  getJobs (value: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.jobsUrl}/?Title=${value}`)
      .pipe(
        tap(jobs => console.log(jobs)),
        catchError(this.handleError('getJobs', []))
      );
  }

  getShortListedCandidate (value: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.candidateUrl}/?jobId=${value}`)
      .pipe(
        tap(jobs => console.log(jobs)),
        catchError(this.handleError('getShortListedCandidate', []))
      );
  }

  getInterviewDetails (value: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.intervieweUrl}/?shrtListId=${value}`)
      .pipe(
        tap(jobs => console.log(jobs)),
        catchError(this.handleError('getInterview', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
