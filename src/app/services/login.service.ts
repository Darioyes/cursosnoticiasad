import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
// importamos la url de la api de los eviroments
import { environment, } from '../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = environment.apiUrlBase;
  

  private http = inject(HttpClient);

  sendError(error: HttpErrorResponse) {
    let errorMessage = 'Algo ha ocurrido mal, por favor intentalo de nuevo';
    let errorNews ='true';
  
    if (error.status === 400 && error.error && error.error.errors) {
      errorMessage = error.error.message;
      errorNews = error.error.errorNews;
    }else{
      errorMessage = error.error;
      errorNews = error.error;
    }
  
    return throwError(() =>  ({ message: errorMessage, errors: error.error.errors, errorNews: errorNews}));
  }

  login(data: any): Observable<any>{

    const url = this.baseurl+'users/login';
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'access-control-allow-origin': '*',
      //'Authorization': 'Bearer YourAccessToken',  // Agrega aquí tu token de autorización si es necesario
    });
    return this.http.post<any>(url,data,{ headers: headers }).pipe(
      catchError(this.sendError)
    );
  }
}
