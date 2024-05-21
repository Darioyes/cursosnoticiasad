import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IComment, IComments } from '@interfaces/iComments';
import { ContactMeService } from '@services/contact-me.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit{

  //injectamos el servicio
  commentsService = inject(ContactMeService);

  commentsResponse!:IComments ;
  comments!: IComment[];

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentsService.contactMe().subscribe({
      next: (response: any) => {
        //console.log(response);
        this.commentsResponse = response;
        this.comments = response.data.data;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  deleteComment(id: any) {

    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este comentario?');
    if (confirmDelete) {
      this.commentsService.deleteContact(id).subscribe({
        next: (response: any) => {
          //console.log(response);
          alert(response.message);
          this.getComments();
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
  //descargar archivo
  downloadFile(id: number) {
    this.commentsService.downloadFile(id).subscribe({
      next: (response: any) => {
        //console.log(response);
        const url = window.URL.createObjectURL(response);
        window.open(url);
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
