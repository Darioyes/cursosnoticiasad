import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { iUsers } from '@interfaces/iUsers';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private http = inject(HttpClient);
  public baseurl = environment.apiUrlBase+'api/'
  //private modalSubject: Subject<boolean> = new Subject<boolean>();

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

  getUsers(id?:number):iUsers|any{
    let url = '';

    if(id){
      url = this.baseurl+'users/'+id;

    }else{
      url = this.baseurl+'users';
    };
    const headers = {
      'Accept': 'application/json',
    };
    return this.http.get(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  deleteUser(id:number){
    const url = this.baseurl+'users/'+id;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    return this.http.delete(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  updateUser(id:number, data:any){
    const url = this.baseurl+'users/'+id;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    return this.http.put(url,data,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  getPagination(page:string){
    const url = page;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    return this.http.get<any>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }
}
