import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesCoursesService } from '@services/categories-courses.service';
import { NewsService } from '@services/news.service';

@Component({
  selector: 'app-courses-categories',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './courses-categories.component.html',
  styleUrl: './courses-categories.component.scss'
})
export class CoursesCategoriesComponent {

  public closeModalArticle: boolean = false;

  public serviceCategoriesNews = inject(CategoriesCoursesService);
  public newService = inject(NewsService);
  public formbuilder = inject(FormBuilder);
  public categoriesNewsForm:any = new FormGroup({});


  @Input({required:true}) changeCategoryNews!: boolean;
  @Input() nameCategory:string | any;
  @Input() idCategory: number | any;
  @Output() modalClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {

    this.validatorsCategoriesNews();

  }

  ngOnChanges(){
    if(!this.changeCategoryNews){
      setTimeout(() => {
        this.categoriesNewsForm.setValue({
          name: this.nameCategory ? this.nameCategory: '',
        });
        const data = new FormData();
        data.append('name', this.categoriesNewsForm.get('categoriesNewsForm')?.value);
      },500);
    };
  }

  validatorsCategoriesNews(){
    this.categoriesNewsForm = this.formbuilder.group({
      name: ['',Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(3)])],
    });
  };

  get name() { return this.categoriesNewsForm.get('name'); }

  createCategoryNews(){

    if(this.changeCategoryNews){
      this.serviceCategoriesNews.createCategoryNews(this.categoriesNewsForm.value).subscribe({
        next: (response: any) => {
          alert(response.message);
          this.closeModal();
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        }
      });
    }else{
      console.log('update');
      this.serviceCategoriesNews.updateCategoryNews(this.categoriesNewsForm.value,this.idCategory).subscribe({
        next: (response: any) => {
          alert(response.message);
          this.closeModal();
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

  closeModal(){
    this.closeModalArticle = false;
    this.newService.setModalActive(false);
    this.changeCategoryNews = false;
    this.categoriesNewsForm.reset();
    this.modalClose.emit(this.closeModalArticle);
  }


}
