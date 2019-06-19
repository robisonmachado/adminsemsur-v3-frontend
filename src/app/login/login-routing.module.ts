import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginErrorComponent } from './login-error/login-error.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'login-error', component: LoginErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
