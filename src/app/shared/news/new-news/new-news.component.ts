import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICategorycourse, ICategorynew, INews } from '@interfaces/inews';
import { CategoriesCoursesService } from '@services/categories-courses.service';
import { CategoriesNewsService } from '@services/categories-news.service';
import { NewsService } from '@services/news.service';
import { LoadingComponent } from '@shared/loading/loading.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-new-news',
  standalone: true,
  imports: [
    TitleComponent,
    ReactiveFormsModule,
    LoadingComponent,
  ],
  templateUrl: './new-news.component.html',
  styleUrl: './new-news.component.scss'
})
export class NewNewsComponent implements OnInit{

 public newService = inject(NewsService);
 public formbuilder = inject(FormBuilder);
 public categoriesNewsService = inject(CategoriesNewsService);
 public categoriesCoursesService = inject(CategoriesCoursesService);

 public newsForm:any = new FormGroup({});

 public news: INews[]| any;
 public categoriesNews: ICategorynew| any;
 public categoriesCourse: ICategorycourse| any;
 public existCategories: any;

 ngOnInit() {
  this.newsNew();
  this.getCategoriesNews();
  this.getCategoriesCourses();
 }

 @Output( ) openModalNews: EventEmitter<boolean> = new EventEmitter<boolean>();

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


  get title() { return this.newsForm.get('title'); }
  get epigraph() { return this.newsForm.get('epigraph'); }
  get content() { return this.newsForm.get('content'); }
  get visible() { return this.newsForm.get('visible'); }
  get featured() { return this.newsForm.get('featured'); }
  get category_news_id() { return this.newsForm.get('category_news_id'); }
  get category_course_id() { return this.newsForm.get('category_course_id'); }
  get image() { return this.newsForm.get('image'); }

  postNews(){

      if(this.newsForm.valid){

        const data = new FormData();
        data.append('title', this.newsForm.get('title').value);
        data.append('epigraph', this.newsForm.get('epigraph').value);
        data.append('content', this.newsForm.get('content').value);
        data.append('visible', this.newsForm.get('visible').value);
        data.append('featured', this.newsForm.get('featured').value);
        data.append('category_news_id', this.newsForm.get('category_news_id').value);
        data.append('category_course_id', this.newsForm.get('category_course_id').value);
        data.append('image', this.newsForm.get('image').value);

        this.newService.newsNew(data).subscribe({
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
      }else{
        console.log('formulario invalido');
      }
  }

  onFileChangeForm(event: any) {
    const file = event.target.files[0];
    this.newsForm.patchValue({
      image: file
    });
    this.newsForm.get('image').updateValueAndValidity();
    event.target.value = '';
  }

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


  closeModal(){

    this.newService.setModalActive(false);
    this.openModalNews.emit(false);
    //limpiamos el formulario
    this.newsForm.reset();
  }


}
