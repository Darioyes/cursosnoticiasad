import { DatePipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INews } from '@interfaces/inews';
import { NewsService } from '@services/news.service';
import { FormModifyComponent } from '@shared/form-modify/form-modify.component';
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
    FormModifyComponent,
    NgClass,
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
  public errorsArticle: string[] | any = [];
  public modifyArticle: boolean | any = false;
  public idArticle: number | any;
  public errorNews: any;
  

  @Input( ) newsId: number | any;
  @Input( ) activeGet: boolean | any = false;
  @Output( ) modalClose: EventEmitter<boolean> = new EventEmitter<boolean>();

//inplemantamos el ngOnInit para inicializar el formulario
  ngOnInit() {
   
    this.articleFormNew();

    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getOneNews(this.activeGet);
    
  }

  articleFormNew(){
    
    this.articleForm = this.formbuilder.group({
      news_id: '',
      subtitle: ['',Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(5)])],
      entrance: ['',Validators.compose([Validators.required,Validators.maxLength(1000),Validators.minLength(5)])],
      body_news: ['',Validators.compose([Validators.required,Validators.maxLength(10000),Validators.minLength(5)])],
      image: ['']
    });
  }


  
  get news_id() {
    return this.articleForm.get('news_id');
  }
  
  get subtitle() { 
    return this.articleForm.get('subtitle'); 
  }
  get entrance() { 
    return this.articleForm.get('entrance'); 
  }
  get body_news() { 
    return this.articleForm.get('body_news'); 
  }
  get image() { 
    return this.articleForm.get('image'); 
  }


  //metodo para solicitar una noticia
  getOneNews(num:number){
    if(num){
      const UrlImg = environment.apiUrlBase;
      this.newService.getnews(this.newsId).subscribe({
        next: (response:INews | any) => {
          //console.log(response);
          this.news = response;
          this.images = UrlImg+response?.data.image?.replace('public', 'storage');
          
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
  };

  //metodo para enviar a travez de output el valor de la variable openModal a false al padre que es news-page
  closeModal(){
    this.modalClose.emit(false);
    this.newArticle = false;
    this.newService.setModalActive(false);
    //limpiamos el formulario
    this.articleForm.reset();
    if(this.modifyArticle){
      this.modifyArticle = false;
    }
  }
  
  newArticleOpen(){
    //this.modifyArticle = false;
    this.newArticle = !this.newArticle;
    this.articleForm.setValue({
      news_id: this.news.data.id ? this.news.data.id  : '',
      subtitle: '',
      entrance: '',
      body_news: '',
      image: ''
    });

   
  };
  newArticleClose(){
    this.newArticle = !this.newArticle;
    this.articleForm.reset();
      }

  newArticleSend(){
    if(this.articleForm.valid){

      const formData = new FormData();
      formData.append('news_id', this.articleForm.get('news_id')?.value);
      formData.append('subtitle', this.articleForm.get('subtitle')?.value);
      formData.append('entrance', this.articleForm.get('entrance')?.value);
      formData.append('body_news', this.articleForm.get('body_news')?.value);
      formData.append('image', this.articleForm.get('image')?.value);
      console.log(formData);
      
      //console.log(this.articleForm.value);
      this.newService.createArticle(formData).subscribe({
        next: (response: any) => {
          //console.log(response);
          this.getOneNews(this.activeGet);
          //borrar el formulario
          this.articleForm.reset();
          if(response.error === false){
            this.newArticle = false;
            alert(response.message);
          };
          //actualizar la lista de articulos con el nuevo articulo

          
        },
        error: (error: any) => {
          //error.errors.image
          //console.log(error.errors);
          this.errorsArticle = error.errors;
        },
        complete: () => {
          console.log('complete');
        }
      });
    }else{
      this.messageArticleError = 'Todos los campos son obligatorios';
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.articleForm.patchValue({
      image: file
    });
    this.articleForm.get('image').updateValueAndValidity();
    event.target.value = '';
  }

  deleteOneArticle(id:number){
    const confirmDelete = confirm(`¿Estas seguro de eliminar este articulo?`);
    if(confirmDelete){
      //console.log(id);
      this.newService.deleteArticle(id).subscribe({
        next: (response: any) => {
          //console.log(response);
          this.getOneNews(this.activeGet);

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

  modifyArticleOpen(idArticle:number){
    this.modifyArticle = true;
    this.idArticle = idArticle;
  }

  modifyArticleClose(article:boolean){
    this.modifyArticle = article;
  }
  
}
