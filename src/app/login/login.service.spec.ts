import { LoginService } from './login.service';

describe('ProgressBarService', () => {
  let service: LoginService;
  const mockMonth = new Array();
  beforeEach(() => {
    service = new LoginService();
  });

  it('#login should return current value when correct value passed', () => {
    const name = 'amit';

    service.login(name);
    expect(service.loggedIn).toEqual(true);
    expect(service.user).toEqual('amit');
  });

  it('#logout should return null user value when correct value passed', () => {

    service.logout();
    expect(service.loggedIn).toEqual(false);
    expect(service.user).toEqual(null);
  });
});

