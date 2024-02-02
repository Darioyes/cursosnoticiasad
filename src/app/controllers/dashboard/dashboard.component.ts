import { NgClass } from '@angular/common';
import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsService } from '@services/news.service';
import { NavBarComponent } from '@shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    NgClass
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnChanges, OnInit {
  public modal: boolean | any = false;
  public newsService = inject(NewsService);

  constructor() {
    
   }

   //implementamos el ngOinit
   ngOnInit(): void {
    
  }


  //implementamos el ngOnchanges
  ngOnChanges(changes: any): void {
   this.modalActive()

    
  }

  modalActive(){
    this.newsService.getModalActive().subscribe((response: any) => {
      this.modal = response;
      console.log(this.modal);
    });
  }

}
