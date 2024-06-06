import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { INews } from '@interfaces/inews';
import { Observable, Subject, catchError, throwError } from 'rxjs';
//import { environment } from 'src/environments/environment.development';
import { environment } from 'src/environments/environment'; //cambiado por video

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  private http = inject(HttpClient);
  public baseurl = environment.apiUrlBase+'api/'
  private modalSubject: Subject<boolean> = new Subject<boolean>();



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

    //servicio que setea el modal
    setModalActive(value: boolean): void {
      this.modalSubject.next(value);
    }
    //servicio que obtiene el modal
    getModalActive(): Observable<boolean> {
      return this.modalSubject.asObservable();
    }


  //------News----------

  getnews(id?:any):INews | any{
     let url = '';

    if(id){
      url = this.baseurl+'news/'+id;

    }else{
      url = this.baseurl+'news';
    };
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.get<INews | any>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  newsNew(data:any){
    const url = this.baseurl+'news';
    //console.log('datos a enviar nuevos')
    //console.log(data);
    const headers = new HttpHeaders({
      //enviar encabezados para arhivos y texto
      'Accept': 'application/json',
      //'Content-Type': 'multipart/form-data',
    });
    return this.http.post<any>(url,data,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  modifyNews(data:any,id:number){
    const url = this.baseurl+'news2/'+id;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.post<any>(url,data,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  deleteNews(id:number){
    const url = this.baseurl+'news/'+id;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.delete<any>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  getPagination(page:any){
    const url = page;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.get<INews>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }




  //------Article----------

  createArticle(data:any){
    const url = this.baseurl+'articles';
    //console.log('datos a enviar nuevos')
    //console.log(data);
    const headers = new HttpHeaders({
      //enviar encabezados para arhivos y texto
      'Accept': 'application/json',
      //'Content-Type': 'multipart/form-data',


    });
    return this.http.post<any>(url,data,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  modifyArticle(data:any,id:number){
    const url = this.baseurl+'articles2/'+id;
    //console.log('datos a modificar')
    //console.log(data);
    const headers = new HttpHeaders({
      //enviar encabezados para arhivos y texto
      'Accept': 'application/json',
      //'Content-Type': 'multipart/form-data',
    });
    return this.http.post<any>(url,data,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  getArticle(id:number){
    const url = this.baseurl+'articles/'+id;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.get<any>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  deleteArticle(id:number){
    const url = this.baseurl+'articles/'+id;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    });
    return this.http.delete<any>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  // ------Comments----------
  //eliminar comentario
  deleteComment(id:number){
    const url = this.baseurl+'comments/'+id;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    return this.http.delete<any>(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }
}
