import { NgClass } from '@angular/common';
import { Component, Output, inject } from '@angular/core';
import { ICategorynew } from '@interfaces/inews';
import { CategoriesCoursesService } from '@services/categories-courses.service';
import { NewsService } from '@services/news.service';
import { CoursesCategoriesComponent } from '@shared/categories/courses-categories/courses-categories.component';
import { LoadingComponent } from '@shared/loading/loading.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-categories-courses-page',
  standalone: true,
  imports: [
    TitleComponent,
    LoadingComponent,
    CoursesCategoriesComponent,
    NgClass
  ],
  templateUrl: './categories-courses-page.component.html',
  styleUrl: './categories-courses-page.component.scss'
})
export class CategoriesCoursesPageComponent {

  public categoriesNewsServices = inject(CategoriesCoursesService);
  public newsServices = inject(NewsService);
  public categories:ICategorynew | any;
  public categoriesError: any;
  public responseCategories: any;
  public errorCategoriesNews: any;
  public modalopencategory: boolean = false;
  public nameCategory: string | any;
  public idCategory: number | any;
  public categoriesPag:[] | any;

  public changeCategoryNews: boolean = false;
  public changeCategoryCourses: boolean = false;

  @Output() openModal: boolean | any = false;


  ngOnInit(): void {
    this.getAllCategoriesNews();

  }

  // ngOnChanges(){

  // };

  getAllCategoriesNews(){
    this.categoriesNewsServices.getCategoriesNews().subscribe({
      next: (response: any) => {
        this.responseCategories = response;
        this.categories = response.data.data;
        this.categoriesError = response.error;
        //console.log(this.responseCategories);
      },
      error: (error: any) => {
        console.log(error);
        this.errorCategoriesNews = error.message.message;
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  createCategoryNews(news: boolean , namecategory?: string | any, id?: number){
    this.openModal = true;
    this.newsServices.setModalActive(true);
    this.changeCategoryNews = news;
    this.modalopencategory = true;
    this.nameCategory = namecategory;
    this.idCategory = id
  };

  categoryDelete(id: number){
  const confirmDelete = confirm(`¿Estas seguro de eliminar esta categoría?`);
    if(confirmDelete){

      this.categoriesNewsServices.deleteCategoryNews(id).subscribe({

        next: (response: any) => {
          this.getAllCategoriesNews();
          alert(response.message)
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

  closeModal(modal: boolean){
    this.openModal = modal;
    this.getAllCategoriesNews();
    this.changeCategoryNews = !this.changeCategoryNews;

  }

  pagination(pag:any){
    this.categoriesNewsServices.getPagination(pag).subscribe({
      next: (response: any) => {
        //console.log(response);
        this.responseCategories = response;
        //console.log(response);
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
