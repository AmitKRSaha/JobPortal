import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const jobs = [
      {
        id: 1,
        name: 'IT Soft',
        Title : 'Java Eng',
        Date_Posted : '20/8/13',
        Status : 'Open'
      },
      {
        id: 2,
        name: 'Capgemini',
        Title : 'Dot Net',
        Date_Posted : '20/11/13',
        Status : 'Open'
      },
      {
        id: 3,
        name: 'FAI',
        Title : 'Angular',
        Date_Posted : '20/5/16',
        Status : 'Closed'
      }
    ];

    const shortListedCandidate = [
      {
        jobId: 1,
        id: 1,
        name: 'Raju',
        worksat : 'PLM Inc',
        Exp : '6 years',
        CTC : '10L'
      },
      {
        jobId: 2,
        id: 1,
        name: 'Abhay',
        worksat : 'SysTel',
        Exp : '10 years',
        CTC : '12L'
      }
    ];
    const interviewDetails = [
      {
        shrtListId: 1,
        id: 1,
        Interview: 'Round#1',
        interviewer : 'Vijay',
        Date : '20/8/13',
        Result : 'Selected'
      },
      {
        shrtListId: 2,
        id: 1,
        Interview: 'HR Round',
        interviewer : 'Singh,HR',
        Date : '27/8/13',
        Result : 'Offered'
      }
    ];
    return {jobs, shortListedCandidate, interviewDetails};
  }
}
