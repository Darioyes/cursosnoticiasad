import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { INews } from '@interfaces/inews';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  private http = inject(HttpClient);
  public baseurl = environment.apiUrlBase+'api/'
  public modal: boolean | any;


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

  getnews(id?:any){
     let url = '';

    if(id){
      url = this.baseurl+'news/'+id;
      this.modal = true;

    }else{
      url = this.baseurl+'news';
    };
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.get<INews>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }
  getPagination(page:any){
    const url = page;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.get<any>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }


  getModalActive(){
    return this.modal;
  }


  //------Article----------

  createArticle(data:any){
    const url = this.baseurl+'articles';
    const headers = new HttpHeaders({
      //enviar encabezados para arhivos y texto
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',

      
    });
    return this.http.post<any>(url,data,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }
}
