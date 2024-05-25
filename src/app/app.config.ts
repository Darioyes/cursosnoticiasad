import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { errorHandlerInterceptor } from './interceptor/error-handler.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
       //withHashLocation sirve para que en el servidor siempre vaya al index.html,
    withHashLocation()
    ),
    provideClientHydration(),
    // importProvidersFrom(
    //     //aca se guardan todos los modulos que se van a usar en la aplicacion
    //     HttpClientModule,


    // ),
    provideHttpClient(
      withFetch(),
      //withInterceptorsFromDi() sirve para que se puedan usar los interceptores que se crean en el proyecto
      withInterceptorsFromDi(),
      withInterceptors([errorHandlerInterceptor]),
      ),

  ]
};
