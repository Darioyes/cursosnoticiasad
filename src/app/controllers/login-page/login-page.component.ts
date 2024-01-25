import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '@services/login.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonPipe,
    AsyncPipe,
    //HttpClientModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export default class LoginPageComponent implements OnInit {

  //creamos el formgroup para el formulario
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  //inyectamos el formulario
  public formbuilder = inject(FormBuilder);
  //inyectamos el servicio de login
  public loginService = inject(LoginService);
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
          console.log(data);
          sessionStorage.setItem('token', data.noti_token);
          this.router.navigate(['/home']);
          this.loginForm.reset();
        },
        error: (error)=>{
          //console.log(error);
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
