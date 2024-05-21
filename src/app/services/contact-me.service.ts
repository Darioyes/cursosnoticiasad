import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IComments } from '@interfaces/iComments';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment'; //cambiado por video

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  private http = inject(HttpClient);

  public baseurl = environment.apiUrlBase+'api/'

  constructor() { }

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

  //servicio donde me envian el mensaje
  contactMe(){
    //se conecta para obtener el mensaje
    let url = this.baseurl+'contact';
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.get<IComments>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );

  }

  //borrar contactame
  deleteContact(id:number){
    let url = this.baseurl+'contact/'+id;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.delete(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  //descargar imagen adjunta del contacto
  downloadFile(id:number){
    let url = this.baseurl+'contact/download/'+id;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.get(url,{ headers: headers, responseType: 'blob' }).pipe(
      catchError(this.sendError)
      );
  }
  getPagination(page:string){
    const url = page;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.get<IComments>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }
}
