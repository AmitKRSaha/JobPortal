import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobService {

  public apiHost = './assets/app-data.json';

  constructor(
    private http: HttpClient) { }

  /** GET Jobs from the server */
  getAllJobs(): any {
    return this.http.get<any[]>(`${this.apiHost}`);
  }

  getDataFromDataSet(dataSet, filterProperty: string, filterItem: number) {
    const result = dataSet.filter((data) => data[filterProperty] === filterItem);
    // console.log(result );
    return result;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
}

