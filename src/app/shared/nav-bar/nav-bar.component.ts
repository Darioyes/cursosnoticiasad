import { Component, inject } from '@angular/core';
import { LoginService } from '@services/login.service';
//importamos el modulo de rutas
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({ selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss', imports: [CommonModule,
        RouterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class NavBarComponent {

  public RouterModule = inject(RouterModule)
  public router = inject(Router);
  //inyectamos el servicio de login
  public loginService = inject(LoginService);
  //injectamos el httpclient
  public httpClient = inject(HttpClientModule);

  public menuItems = routes
  .map(route => route.children ?? [])
  .flat()
  .filter(route => route && route.path)
  .filter(route => !route.path?.includes(':'))

  constructor() {
    //mapeamos las rutas
    // const navRoutes = routes
    // .map(route => route.children ?? [])
    // .flat()
    // .filter(route => route && route.path)
    // .filter(route => !route.path?.includes(':'))

    //console.log(navRoutes)
   }
   //funcion para cerrar sesion
    logout(){
      //nos conectamos al login service para realizar el logout
      this.loginService.logout().subscribe({
        next: (data:any)=>{
          //removemos el token del localstorage
          sessionStorage.removeItem('token');
          //renomevemos el name del sessionstorage
          sessionStorage.removeItem('name');
          //removemos el success del sessionstorage
          sessionStorage.removeItem('success');
          //redirigimos al login
          this.router.navigate(['/login']);
        },
        error: (error:any)=>{
          console.log(error);
        },
        complete: ()=>{
          console.log("complete");
        }
      });
    }

}
