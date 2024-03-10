import { JsonPipe, NgClass } from '@angular/common';
import { Component, Output, inject } from '@angular/core';
import { INews } from '@interfaces/inews';
import { NewsService } from '@services/news.service';
import { LoadingComponent } from '@shared/loading/loading.component';
import { DetailNewsComponent } from '@shared/news/detail-news/detail-news.component';
import { TitleComponent } from '@shared/title/title.component';
//importamos la interfaz de inews

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [
    //CommonModule,
    NgClass,
    TitleComponent,
    JsonPipe,
    LoadingComponent,
    DetailNewsComponent
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  public newsServices = inject(NewsService);
  public news: INews[] | any;

  public errorNews: any;
  public newsId: number | any;
  public activeGet: boolean | any;
  @Output() openModal: boolean | any = false;
  
  constructor() { 
    this.getAllnews();
  }

  getAllnews(){
    this.newsServices.getnews().subscribe({
      next: (response: INews) => {
        this.news = response;
        
      },
      error: (error: any) => {
        console.log(error);
        this.errorNews = error.message.message;
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
  pagination(pag:any){
    this.newsServices.getPagination(pag).subscribe({
      next: (response: any) => {
        //console.log(response);
        this.news = response;
        
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  getId(id:number){
    //obtenemos el id de la noticia
    this.newsId = id;
    //activamos el get para que se ejecute el ngOnChanges
    this.activeGet = true;
    //abrira el <dialog> que tiene el app-detail-news y mostrara la noticia
    this.openModal = true;

    this.newsServices.setModalActive(true);

  }
  //recibimos el valor del output del app-detail-news
  closeModal(modal: boolean){
    this.openModal = modal;
  }

}
