import { NgClass } from '@angular/common';
import { Component, OnInit, Output, inject } from '@angular/core';
import { ICategorynew } from '@interfaces/inews';
import { CategoriesNewsService } from '@services/categories-news.service';
import { NewsCategoriesComponent } from '@shared/categories/news-categories/news-categories.component';
import { LoadingComponent } from '@shared/loading/loading.component';
import { TitleComponent } from '@shared/title/title.component';
import { NewsService } from './../../../services/news.service';

@Component({
  selector: 'app-categories-news-page',
  standalone: true,
  imports: [
    TitleComponent,
    LoadingComponent,
    NewsCategoriesComponent,
    NgClass
  ],
  templateUrl: './categories-news-page.component.html',
  styleUrl: './categories-news-page.component.scss'
})
export class CategoriesNewsPageComponent implements OnInit{

  public categoriesNewsServices = inject(CategoriesNewsService);
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
