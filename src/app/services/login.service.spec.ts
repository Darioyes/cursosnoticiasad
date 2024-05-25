import { TestBed } from '@angular/core/testing';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [LoginService, provideHttpClient(withInterceptorsFromDi())]
});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
