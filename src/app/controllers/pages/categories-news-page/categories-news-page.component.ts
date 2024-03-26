import { Component, OnInit, inject } from '@angular/core';
import { ICategorynew } from '@interfaces/inews';
import { CategoriesNewsService } from '@services/categories-news.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-categories-news-page',
  standalone: true,
  imports: [
    TitleComponent,
  ],
  templateUrl: './categories-news-page.component.html',
  styleUrl: './categories-news-page.component.scss'
})
export class CategoriesNewsPageComponent implements OnInit{

  public categoriesNewsServices = inject(CategoriesNewsService);
  public categories:ICategorynew | any;
  public responseCategories: any;


  ngOnInit(): void {
    this.getAllCategoriesNews();
  }

  getAllCategoriesNews(){
    this.categoriesNewsServices.getCategoriesNews().subscribe({
      next: (response: any) => {
        this.responseCategories = response;
        console.log(response);
        this.categories = response.data.data;
        console.log(this.categories)

      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  categoryDelete(id: number){
  const confirmDelete = confirm(`¿Estas seguro de eliminar esta categoría?`);
    if(confirmDelete){

      this.categoriesNewsServices.deleteCategoryNews(id).subscribe({

        next: (response: any) => {
          console.log(response);
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

}
