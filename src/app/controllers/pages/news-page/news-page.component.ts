import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { INews } from '@interfaces/inews';
import { NewsService } from '@services/news.service';
import { TitleComponent } from '@shared/title/title.component';
//importamos la interfaz de inews

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    JsonPipe
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  public newsServices = inject(NewsService);
  public news: INews[] | any;
  
  constructor() { 
    this.getAllnews();
  }

  getAllnews(){
    this.newsServices.getnews().subscribe({
      next: (response: INews) => {
        console.log(response);
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
  pagination(pag:any){
    this.newsServices.getPagination(pag).subscribe({
      next: (response: any) => {
        console.log(response);
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
}
