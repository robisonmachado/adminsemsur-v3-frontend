import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginErrorComponent } from './login-error/login-error.component';

@NgModule({
  declarations: [LoginComponent, LoginErrorComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
  ]
})
export class LoginModule { }
