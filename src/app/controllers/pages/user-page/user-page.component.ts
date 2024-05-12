import { DatePipe, NgClass } from '@angular/common';
import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { IUser, iUsers } from '@interfaces/iUsers';
import { UserService } from '@services/user.service';
import { LoadingComponent } from '@shared/loading/loading.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    TitleComponent,
    LoadingComponent,
    DatePipe,
    NgClass
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent implements OnInit, OnChanges{
  ngOnInit(): void {
    this.getUsers()

  }

  ngOnChanges(): void {
    this.getUsers()
  }

  public usersServices = inject(UserService);
  public userFull: iUsers | any;
  public users:IUser | any;
  public admin:string | any;

  getUsers() {
    this.usersServices.getUsers().subscribe({
      next: (response: any) => {
       // console.log(response);
        this.userFull = response;
        this.users = response.data.data;
        //console.log(this.users);

      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  userUpdate(id:number,data:string){

    if(data === 'true'){
      this.admin = 'false';
    }else{
      this.admin = 'true';
    }
    //console.log(data);
    this.admin = {"admin_news": this.admin};
    //console.log(this.admin);

    this.usersServices.updateUser(id,this.admin).subscribe({
      next: (response: any) => {
        alert(response.message);
        this.getUsers();
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });

  }

  userDelete(id:number){
    const confirmDelete = confirm(`¿Estas seguro de eliminar este usuario?`);
    if(confirmDelete){

      this.usersServices.deleteUser(id).subscribe({
        next: (response: any) => {
          //console.log(response);
          alert(response.message);
          this.getUsers();
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

 pagination(pag:any){
    this.usersServices.getPagination(pag).subscribe({
      next: (response: any) => {
        //console.log(response);
        this.userFull = response;

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
