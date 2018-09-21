import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { JobShellComponent } from './job-shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';


describe('JobShellComponent( Basic Functionality Check)', () => {
  let component: JobShellComponent;
  let fixture: ComponentFixture<JobShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JobShellComponent,
      ],
      imports: [HttpClientModule, BrowserAnimationsModule, MatTableModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobShellComponent);
    component = fixture.componentInstance;
    component.allPosedJobs = [
      {
        'id': 1,
        'name': 'IT Soft',
        'Title': 'Java Eng',
        'Date_Posted': '20/8/13',
        'Status': 'Open'
      }];


    fixture.detectChanges();
  });
  beforeEach(() => {
    component.allPosedJobs['jobList'] = [
      {
        'id': 1,
        'name': 'OpenTest',
        'Title': 'OpenTest',
        'Date_Posted': '20/8/13',
        'Status': 'Open'
      }, {
        'id': 2,
        'name': 'ClosedTest',
        'Title': 'ClosedTest',
        'Date_Posted': '21/11/14',
        'Status': 'Closed'
      }];
    component.allPosedJobs['shortListedCandidate'] = [
      {
        'jobId': 1,
        'id': 1,
        'name': 'IT Soft',
        'Title': 'Java Eng',
        'Date_Posted': '20/8/13',
        'Status': 'Open'
      },
      {
        'jobId': 2,
        'id': 1,
        'name': 'IT Soft',
        'Title': 'Java Eng',
        'Date_Posted': '20/8/13',
        'Status': 'Open'
      }];
    component.allPosedJobs['interviewDetails'] = [
      {
        'shrtListId': 1,
        'id': 1,
        'name': 'IT Soft',
        'Title': 'Java Eng',
        'Date_Posted': '20/8/13',
        'Status': 'Open'
      }];

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#checkChanged() should change Value when passed true and open', () => {

    component.checkChanged(true, 'open');
    expect(component.dataSource.length).toEqual(1);
    expect(component.dataSource[0].id).toEqual(1);

  });

  it('#checkChanged() should change Value when passed true and closed', () => {

    component.checkChanged(true, 'closed');
    expect(component.dataSource.length).toEqual(1);
    expect(component.dataSource[0].id).toEqual(2);

  });

  it('#getPostedJobs should filter out when name is passed', () => {
    component.getPostedJobs('Open');
    expect(component.dataSource.length).toEqual(1);
    expect(component.dataSource[0].id).toEqual(1);
  });

  it('#getPostedJobs should filter out when title is passed', () => {
    component.getPostedJobs('Open');
    expect(component.dataSource.length).toEqual(1);
    expect(component.dataSource[0].id).toEqual(1);
  });

  it('#getPostedJobs should filter out when Date_Posted is passed', () => {
    component.getPostedJobs('20');
    expect(component.dataSource.length).toEqual(1);
    expect(component.dataSource[0].id).toEqual(1);
  });

  it('#getPostedJobs should filter out when status is passed', () => {
    component.getPostedJobs('Closed');
    expect(component.dataSource.length).toEqual(1);
    expect(component.dataSource[0].id).toEqual(2);
  });

  it('#getShortListedCandidate should filter out candidate and interview list when correct value passed', () => {
    component.getShortListedCandidate(1);
    expect(component.dataCandidateSource.length).toEqual(1);
    expect(component.dataCandidateSource[0].id).toEqual(1);
    expect(component.dataInterviewSource.length).toEqual(1);
    expect(component.dataInterviewSource[0].id).toEqual(1);
  });

  it('#getShortListedCandidate should filter out only candidate list when correct value passed', () => {
    component.getShortListedCandidate(2);
    expect(component.dataCandidateSource.length).toEqual(1);
    expect(component.dataCandidateSource[0].id).toEqual(1);
    expect(component.dataInterviewSource.length).toEqual(0);
  });

  it('#getCandidateInterviewDetails should filter out only interview list when correct value passed', () => {
    component.getCandidateInterviewDetails(1);
    expect(component.dataInterviewSource.length).toEqual(1);
    expect(component.dataInterviewSource[0].id).toEqual(1);
  });

  it('#getCandidateInterviewDetails should not set any thing interview list when correct value passed', () => {
    component.getCandidateInterviewDetails(2);
    expect(component.dataInterviewSource.length).toEqual(0);
  });
});
