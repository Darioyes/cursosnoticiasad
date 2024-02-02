import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INews } from '@interfaces/inews';
import { NewsService } from '@services/news.service';
import { LoadingComponent } from '@shared/loading/loading.component';
import { TitleComponent } from '@shared/title/title.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-detail-news',
  standalone: true,
  imports: [
    LoadingComponent,
    TitleComponent,
    //importar pipe para el formato de fecha
    DatePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './detail-news.component.html',
  styleUrl: './detail-news.component.scss'
})
export class DetailNewsComponent implements OnChanges, OnInit{

  public newService = inject(NewsService);
  public formbuilder = inject(FormBuilder);
  //public datePipe = inject(DatePipe);
  public news: INews[]| any;
  public images: string | any;
  //public imageArticle: string[] | any =[];
  public UrlImgA = environment.apiUrlBase;
  public newArticle: boolean | any = false;
  public articleForm:any = new FormGroup({});
  public messageArticleError: string | any = '';

  @Input( ) newsId: number | any;
  @Input( ) activeGet: boolean | any = false;
  @Output( ) modalClose: EventEmitter<boolean> = new EventEmitter<boolean>();

//inplemantamos el ngOnInit para inicializar el formulario
  ngOnInit() {
    
    this.articleForm = this.formbuilder.group({
      news_id: '',
      subtitle: ['',Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(5)])],
      entrance: ['',Validators.compose([Validators.required,Validators.maxLength(1000),Validators.minLength(5)])],
      body_news: ['',Validators.compose([Validators.required,Validators.maxLength(10000),Validators.minLength(5)])],
      image: ['']
    });
    
    
  }

  get news_id() { return this.articleForm.get('news_id'); }
  get subtitle() { return this.articleForm.get('subtitle'); }
  get entrance() { return this.articleForm.get('entrance'); }
  get body_news() { return this.articleForm.get('body_news'); }
  get image() { return this.articleForm.get('image'); }

  ngOnChanges(changes: SimpleChanges): void {
    const UrlImg = environment.apiUrlBase;
    if(this.activeGet){
      this.newService.getnews(this.newsId).subscribe({
        next: (response:INews | any) => {
          console.log(response);
          this.news = response;
          this.images = UrlImg+response.data.image.replace('public', 'storage');
          
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

  //metodo para enviar a travez de output el valor de la variable openModal a false al padre que es news-page
  closeModal(){
    this.modalClose.emit(false);
    this.newArticle = false;
    
    //limpiamos el formulario
    this.articleForm.reset();
  }
  
  newArticleOpen(){
    this.newArticle = !this.newArticle;
    // this.articleForm.setValue({
    //   news_id: this.newsId,
    //   subtitle: 'hola',
    //   entrance: '',
    //   body_news: '',
    //   image: ''
    // });

    
    this.articleForm.reset();
   
  };

  newArticleSend(){
    if(this.articleForm.valid){
      
      console.log(this.articleForm.value);
      this.newService.createArticle(this.articleForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          
        },
        error: (error: any) => {
          console.log(error);
          console.log(this.articleForm.value);
        },
        complete: () => {
          console.log('complete');
        }
      });
    }else{
      this.messageArticleError = 'El formulario no es valido';
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.articleForm.patchValue({
      image: file
    });
    this.articleForm.get('image').updateValueAndValidity();
  }


}
