import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

declare var $: any

@Component({
  selector: 'semsur3-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private userService: UserService, 
    private router: Router,
    private formBuilder: FormBuilder) {

      this.loginForm = this.formBuilder.group({
        cpf: this.formBuilder.control('', [Validators.required]),
        senha: this.formBuilder.control('', [Validators.required])
      })

  }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';

    $( () =>  {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
      });
    });

  }

  

  login(form: {cpf: number, senha: string}){
    
    console.log('validando login 1')
    this.userService.login(form.cpf, form.senha).subscribe(
      user => {
        if(user instanceof Object) {
          console.log('validando login 2')
          console.log(user)
          this.userService.modulos().subscribe(
            mods => {
              console.log("LoginComponent --> modulos obtidos")
              console.log("LoginComponent --> navegando para o painel")
              this.router.navigate(['painel'])  
            }
          )
                
        }
        else this.router.navigate(['login-error'])
      }
    )
    
  }

}
