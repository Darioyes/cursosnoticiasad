import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICategorycourse, ICategorynew, INews } from '@interfaces/inews';
import { CategoriesCoursesService } from '@services/categories-courses.service';
import { CategoriesNewsService } from '@services/categories-news.service';
import { NewsService } from '@services/news.service';
import { LoadingComponent } from '@shared/loading/loading.component';
import { TitleComponent } from '@shared/title/title.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-modify-news',
  standalone: true,
  imports: [
    TitleComponent,
    ReactiveFormsModule,
    LoadingComponent,

  ],
  templateUrl: './modify-news.component.html',
  styleUrl: './modify-news.component.scss'
})
export class ModifyNewsComponent implements OnInit, OnChanges{
  public newService = inject(NewsService);
  public formbuilder = inject(FormBuilder);
  public categoriesNewsService = inject(CategoriesNewsService);
  public categoriesCoursesService = inject(CategoriesCoursesService);

  public newsForm:any = new FormGroup({});

  public news: INews[]| any;
  public categoriesNews: ICategorynew| any;
  public categoriesCourse: ICategorycourse| any;
  public existCategories: any;
  public images: string | any;
  public errorNews: any;

  @Input({required:true}) idNews!: number;
  @Output( ) openModalNews: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
   this.newsNew();
   this.getCategoriesNews();
   this.getCategoriesCourses();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getOneNews(this.idNews);

  }

  // inicializamos el formulario de noticias
  newsNew(){
     this.newsForm = this.formbuilder.group({
       title: ['',Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(5)])],
       epigraph: ['',Validators.compose([Validators.required,Validators.maxLength(500),Validators.minLength(5)])],
       content: ['',Validators.compose([Validators.required])],
       visible: [''],
       featured: [''],
       category_news_id: [''],
       category_course_id: [''],
       image: ['']
     });
  }

  //obtenemos todos los campos del formulario
   get title() { return this.newsForm.get('title'); }
   get epigraph() { return this.newsForm.get('epigraph'); }
   get content() { return this.newsForm.get('content'); }
   get visible() { return this.newsForm.get('visible'); }
   get featured() { return this.newsForm.get('featured'); }
   get category_news_id() { return this.newsForm.get('category_news_id'); }
   get category_course_id() { return this.newsForm.get('category_course_id'); }
   get image() { return this.newsForm.get('image'); }

   //modificamos una noticia
   newsModify(id:number){
      //si el formulario es valido
       if(this.newsForm.valid){

        //enviamos los datos del formulario
         const data = new FormData();
         data.append('title', this.newsForm.get('title').value);
         data.append('epigraph', this.newsForm.get('epigraph').value);
         data.append('content', this.newsForm.get('content').value);
         data.append('visible', this.newsForm.get('visible').value);
         data.append('featured', this.newsForm.get('featured').value);
         data.append('category_news_id', this.newsForm.get('category_news_id').value);
         data.append('category_course_id', this.newsForm.get('category_course_id').value);
         data.append('image', this.newsForm.get('image').value);
        //confirmamos si queremos modificar la noticia
         const confirmModify = confirm(`¿Estas seguro de modificar esta noticia?`);

         if(confirmModify){
          //llamamos al servicio de noticias para modificar la noticia
           this.newService.modifyNews(data,id).subscribe({
             next: (data) => {
               //console.log(data);
               this.newService.setModalActive(false);
               this.openModalNews.emit(false);
               this.newsForm.reset();
             },
             error: (error) => {
               console.log(error);
             },
             complete: () => {
               console.log('complete');
             }

           });
         }
       }else{
         console.log('Todos los campos son obligatorios');
       }
   }
   //obtenemos una noticia
   getOneNews(num:number){
    if(num){
      const UrlImg = environment.apiUrlBase;
      this.newService.getnews(this.idNews).subscribe({
        next: (response:INews | any) => {
          console.log(response);
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
      //llenamos el formulario con los datos de la noticia
      setTimeout(() => {
        this.newsForm.setValue({
          title: this.news?.data?.title ? this.news?.data?.title : '',
          epigraph: this.news?.data?.epigraph ? this.news?.data?.epigraph : '',
          content: this.news?.data?.content ? this.news?.data?.content : '',
          visible: this.news?.data?.visible ? this.news?.data?.visible : '',
          featured: this.news?.data?.featured ? this.news?.data?.featured : '',
          category_news_id: this.news?.data?.category_news?.id ? this.news?.data?.category_news?.id : '',
          category_course_id: this.news?.data?.category_course?.id ? this.news?.data?.category_course?.id : '',
          image:'',
        });
      }, 2000);
    }
  };

  //cambiamos la imagen de la noticia
   onFileChangeForm(event: any) {
     const file = event.target.files[0];
     this.newsForm.patchValue({
       image: file
     });
     this.newsForm.get('image').updateValueAndValidity();
     event.target.value = '';
   }

   //obtenemos las categorias de noticias
   getCategoriesNews(){
     this.categoriesNewsService.getCategoriesNews().subscribe({
       next: (response: any) => {
         //console.log(response.data.data);
         this.categoriesNews = response.data.data;
       },
       error: (error: any) => {
         console.log(error);
       },
       complete: () => {
         console.log('complete');
       }
     });

   };
   //obtenemos las categorias de cursos
   getCategoriesCourses(){
     this.categoriesCoursesService.getCategoriesNews().subscribe({
       next: (response: any) => {
         //console.log(response.error);
         this.categoriesCourse = response.data.data;
         this.existCategories = response.error;
       },
       error: (error: any) => {
         console.log(error);
       },
       complete: () => {
         console.log('complete');
       }
     });
   };

   //cerramos el modal
   closeModalNews(){
     this.openModalNews.emit(false);
     //limpiamos el formulario
     this.newsForm.reset();
   }
}
