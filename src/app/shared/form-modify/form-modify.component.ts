import { CommonModule, } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INews } from '@interfaces/inews';
import { NewsService } from '@services/news.service';
import { LoadingComponent } from '@shared/loading/loading.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-form-modify',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LoadingComponent
  ],
  templateUrl: './form-modify.component.html',
  styleUrl: './form-modify.component.scss'
})
export class FormModifyComponent implements OnInit, OnChanges{

  public newService = inject(NewsService);
  public formbuilder = inject(FormBuilder);

  public UrlImg: string | any = environment.apiUrlBase;
  public articleModifyForm:any = new FormGroup({});
  public article: INews[] | any;
  public modifyArticle: boolean | any = false;
  public messageArticleError: string | any = '';


  @Input() idArticle: number | any;
  @Output() formModifyClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {

    this.articleFormModify()
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.modifyArticleOpen(this.idArticle);

  }

  articleFormModify(){
    this.articleModifyForm = this.formbuilder.group({
      news_id: ['',Validators.compose([Validators.required])],
      subtitle: ['',Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(5)])],
      entrance: ['',Validators.compose([Validators.required,Validators.maxLength(1000),Validators.minLength(5)])],
      body_news: ['',Validators.compose([Validators.required,Validators.maxLength(10000),Validators.minLength(5)])],
      image: ['']
   });
  };
  get news_id() {return this.articleModifyForm.get('news_id');}
  get subtitle() { return this.articleModifyForm.get('subtitle'); }
  get entrance() { return this.articleModifyForm.get('entrance'); }
  get body_news() { return this.articleModifyForm.get('body_news'); }
  get image() { return this.articleModifyForm.get('image'); }

  modifyOneArticle(id:number){

    if(this.articleModifyForm.valid){

      const data = new FormData();
      data.append('news_id', this.articleModifyForm.get('news_id')?.value);
      data.append('subtitle', this.articleModifyForm.get('subtitle')?.value);
      data.append('entrance', this.articleModifyForm.get('entrance')?.value);
      data.append('body_news', this.articleModifyForm.get('body_news')?.value);
      data.append('image', this.articleModifyForm.get('image')?.value);
      //console.log(data);
      //console.log(this.articleModifyForm.value);

      const confirmModify = confirm(`¿Estas seguro de modificar este articulo?`);

      if(confirmModify){
        this.newService.modifyArticle(data,id).subscribe({

          next: (response: any) => {
            //console.log(response);
            //this.articleModifyForm.reset();
            if(response.error === false){
              this.modifyArticle = false;
              alert(response.message);
              this.modifyFomrClose();
            }
          },
          error: (error: any) => {
            console.log(error);
            //this.errorsArticle = error.errors;
          },
          complete: () => {
            console.log('complete');

          }
        });

      };



    }else{
      this.messageArticleError = 'Todos los campos son obligatorios';
    }


  }

  modifyArticleOpen(id:number){

    //obtener el articulo
    if(id){
      //const UrlImg = environment.apiUrlBase;
      this.newService.getArticle(id).subscribe({
        next: (response: any) => {
          console.log(response);
          this.article = response;
          this.articleFormModify();
          this.UrlImg = this.UrlImg + this.article?.data?.image?.replace('public', 'storage');
          //console.log(this.UrlImg);
          //this.setValues();
          //this.modifyArticle = true;
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        }
      });

      //hacer retrasarla carga del formulario porque se carga antes que el articulo
      setTimeout(() => {
        this.articleModifyForm.setValue({

          news_id: this.article?.data?.news_id ? this.article?.data?.news_id: '',
          subtitle: this.article?.data?.subtitle ? this.article?.data?.subtitle :'',
          entrance: this.article?.data?.entrance ? this.article?.data?.entrance : '',
          body_news: this.article?.data?.body_news ? this.article?.data?.body_news : '',
          image: ''
        });
      }, 500);

    }

  }

  modifyFomrClose(){
    this.modifyArticle = false;
    this.articleModifyForm.reset();
    this.formModifyClose.emit(this.modifyArticle);
  }
  onFileChangeForm(event: any) {
    const file = event.target.files[0];
    this.articleModifyForm.patchValue({
      image: file
    });
    this.articleModifyForm.get('image').updateValueAndValidity();
    event.target.value = '';
  }
}
