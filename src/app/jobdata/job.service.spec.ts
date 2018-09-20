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
    service.getJobs('amit').subscribe((data: any) => {
      expect(data.name).toBe('Amit');

      const req = httpMock.expectOne(`api/url?anything=1`, 'call to api');
      expect(req.request.method).toBe('GET');
      req.flush({
        name: 'Amit'
      });
      httpMock.verify();
    });
  });

  it('should be get call for getShortListedCandidate', () => {
    service.getInterviewDetails('amit').subscribe((data: any) => {
      expect(data.name).toBe('Amit');

      const req = httpMock.expectOne(`api/url?anything=1`, 'call to api');
      expect(req.request.method).toBe('GET');
      req.flush({
        name: 'Amit'
      });
      httpMock.verify();
    });
  });

  it('should be get call for getInterviewDetails', () => {
    service.getInterviewDetails('amit').subscribe((data: any) => {
      expect(data.name).toBe('Amit');

      const req = httpMock.expectOne(`api/url?anything=1`, 'call to api');
      expect(req.request.method).toBe('GET');
      req.flush({
        name: 'Amit'
      });
      httpMock.verify();
    });
  });

});

describe ('JobService (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let jobService: JobService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    jobService = new JobService(<any> httpClientSpy);
  });

  it('should return expected Jobs (HttpClient called once)', () => {
    const expectedJobs: any[] =
      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    httpClientSpy.get.and.returnValue(asyncData(expectedJobs));

    jobService.getAllJobs().subscribe(
      jobs => expect(jobs).toEqual(expectedJobs, 'expected jobs'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected Jobs (HttpClient called once)', () => {
    const expectedJobs: any[] =
      [{ id: 1, name: 'A' }];

    httpClientSpy.get.and.returnValue(asyncData(expectedJobs));

    jobService.getJobs('1').subscribe(
      jobs => expect(jobs).toEqual(expectedJobs, 'expected jobs'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
