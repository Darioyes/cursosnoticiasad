import { LoginService } from '@services/login.service';
import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<unknown>> => {
  const loginService = inject(LoginService);
  const token = sessionStorage.getItem('token');

  if(token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

  }
  return next(req);
};
