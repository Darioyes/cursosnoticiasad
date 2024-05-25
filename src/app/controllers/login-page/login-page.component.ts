import { AsyncPipe, JsonPipe } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { LoadingButtonComponent } from '@shared/loading-button/loading-button.component';



@Component({ selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss', imports: [ReactiveFormsModule,
        JsonPipe,
        AsyncPipe,
        LoadingButtonComponent], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class LoginPageComponent implements OnInit {

  //creamos el formgroup para el formulario
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  //inyectamos el formulario
  public formbuilder = inject(FormBuilder);
  //inyectamos el servicio de login
  public loginService = inject(LoginService);
  //inyectamos el Httpclient
  public httpClient = inject(HttpClientModule);
  //inyectamos el router
  public router = inject(Router);
  //inyectamos la desuscripcion de DestroyRef
  public destroyRef = inject(DestroyRef);
  //variable para validar el formulario
  public valid: boolean = false;
  public loginErrors: any | undefined = {};
  public errorslogin: boolean = false;
  public loadingButton: boolean = false;

  ngOnInit() {
    //inicializamos el formulario del formgroup
    this.loginForm = this.formbuilder.group({
      email : ['',Validators.compose([Validators.required, Validators.email])],
      password : ['',Validators.compose([Validators.required])]

    })
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  //data$:Observable<any> = this.loginService.login(this.loginForm.value as Observable<any>);

  //funcion para enviar los datos del formulario
  loginUser(){
    //validamos el formulario
    if(this.loginForm.valid){
      this.loadingButton = !this.loadingButton;
      this.loginService.login(this.loginForm.value)
      .subscribe({
        next: (data:any)=>{
          //console.log(data);
          //guardamos el token en el session storage
          sessionStorage.setItem('token', data.noti_token);

          //guardamos el nombre y el response en el session storage
          sessionStorage.setItem('name', data.data.name);
          //sessionStorage.setItem('response', JSON.stringify(data));
          sessionStorage.setItem('success', data.response);
          //redirigimos al home
          this.router.navigate(['/home']);
          this.loginForm.reset();
        },
        error: (error)=>{
          //console.log(error.message);
          this.loginErrors = error.message;
          this.errorslogin = !this.errorslogin;
          this.loadingButton = !this.loadingButton;
        },
        complete: ()=>{
          console.log('complete');
          this.loadingButton = !this.loadingButton;
        }
      });
      //this.loginForm.reset();
    }else{
      this.valid = !this.valid;
    }
  }
  //enviamos los datos del formulario de login

}
