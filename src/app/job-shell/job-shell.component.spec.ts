import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { JobShellComponent } from './job-shell.component';


describe('JobShellComponent', () => {
  let component: JobShellComponent;
  let fixture: ComponentFixture<JobShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobShellComponent,
      ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobShellComponent);
    component = fixture.componentInstance;
    component.allPosedJobs = [{
      id: 1,
      name: 'Sample1',
      Title : 'Java Eng',
      Date_Posted : '20-8-13',
      Status : 'Open'
    },
    {
      id: 2,
      name: 'Sample2',
      Title : 'Java Eng',
      Date_Posted : '20-8-13',
      Status : 'closed'
    },
  ];
    component.opensection = {
      postedJobs : 'open',
      shortListed : 'closed',
      interview : 'closed'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#checkChanged() should change Value when passed true and open', () => {
     expect(component.opensection.postedJobs).toBe('open');
     expect(component.opensection.shortListed).toBe('closed');
     expect(component.opensection.interview).toBe('closed');
     expect(component.allPosedJobs.length).toEqual(2);

     component.checkChanged(true, 'open');
    expect(component.postedJobs.length).toEqual(1);
    expect(component.postedJobs[0].id).toEqual(1);

  });

  it('#checkChanged() should change Value when passed true and closed', () => {
    expect(component.opensection.postedJobs).toBe('open');
    expect(component.opensection.shortListed).toBe('closed');
    expect(component.opensection.interview).toBe('closed');
    expect(component.allPosedJobs.length).toEqual(2);

    component.checkChanged(true, 'closed');
   expect(component.postedJobs.length).toEqual(1);
   expect(component.postedJobs[0].id).toEqual(2);

 });
});
