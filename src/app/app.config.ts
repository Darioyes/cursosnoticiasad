import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { errorHandlerInterceptor } from './interceptor/error-handler.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    // importProvidersFrom(
    //     //aca se guardan todos los modulos que se van a usar en la aplicacion
    //     HttpClientModule,
    // ),
    provideHttpClient(
      withFetch(),
      withInterceptors([errorHandlerInterceptor]),
      ),
  ]
};
