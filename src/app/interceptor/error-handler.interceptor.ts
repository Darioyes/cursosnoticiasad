import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<unknown>> => {
  
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
