import { Component, inject } from '@angular/core';
//importamos el modulo de rutas
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  public RouterModule = inject(RouterModule)

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

}
