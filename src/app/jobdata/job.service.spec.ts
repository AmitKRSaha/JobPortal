import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';

import { defer } from 'rxjs';

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/** Create async observable error that errors
 *  after a JS engine turn */
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('JobService', () => {
  let service: JobService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [JobService],
      });

      // inject the service
      service = TestBed.get(JobService);
      httpMock = TestBed.get(HttpTestingController);
  });

  it('should be get call for getJobs', () => {
    service.getAllJobs().subscribe((data: any) => {

      const req = httpMock.expectOne(`api/url?anything=1`, 'call to api');
      expect(req.request.method).toBe('GET');
      req.flush({
        name: 'Amit'
      });
      httpMock.verify();
    });
  });

  const testData = [
    {
      'shrtListId': 1,
      'id': 1,
      'name': 'IT Soft',
      'Title': 'Java Eng',
      'Date_Posted': '20/8/13',
      'Status': 'Open'
    }];
    it('#getDataFromDataSet should filter data when correct data passed', () => {

      const result = service.getDataFromDataSet(testData, 'shrtListId', 1);

      expect(result[0].Title).toEqual('Java Eng');
    });

    it('#getDataFromDataSet should filter data when wrong data passed', () => {

      const result = service.getDataFromDataSet(testData, 'sds', 1);

      expect(result.length).toBe(0);
    });

});

