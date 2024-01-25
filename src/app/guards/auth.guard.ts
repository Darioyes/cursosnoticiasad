import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

 
  const token = sessionStorage.getItem('token');
  if (token) {
    return true;
  }else{
  //redirigimos al login
    const router = inject(Router);
    router.navigate(['/login']);
    return true;
  }

};
