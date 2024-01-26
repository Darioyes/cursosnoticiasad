import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonPipe,
    AsyncPipe,
    HttpClientModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
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
  //variable para validar el formulario
  public valid: boolean = false;
  public loginErrors: any | undefined = {};
  public errorslogin: boolean = false;

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
      this.loginService.login(this.loginForm.value).subscribe({
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
        },
        complete: ()=>{
          console.log('complete');
        }
      });
      //this.loginForm.reset();
    }else{
      this.valid = !this.valid;
    }
  }
  //enviamos los datos del formulario de login

}
