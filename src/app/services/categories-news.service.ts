import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICategorynew } from '@interfaces/inews';
import { Subject, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriesNewsService {

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

  getCategoriesNews(id?:number):ICategorynew|any{
    let url = '';

    if(id){
      url = this.baseurl+'categories_news/'+id;

    }else{
      url = this.baseurl+'categories_news';
    };
    const headers = {
      'Accept': 'application/json',
    };
    return this.http.get(url,{ headers: headers }).pipe(
      catchError(this.sendError)
      );
  }

  deleteCategoryNews(categoryId:number){
    const url = this.baseurl+'categories_news/'+categoryId;
    const headers = {
      'Accept': 'application/json',
      //'Content-Type': 'application/json',
    };
    return this.http.delete(url,{ headers: headers }).pipe(
      catchError(this.sendError)
    );
  };
}
