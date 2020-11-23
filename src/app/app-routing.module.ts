import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { OrgRegisterComponent } from './org-register/org-register.component';
import { PatRegisterComponent } from './pat-register/pat-register.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path : "",
    component : IndexComponent
  },
  {
    path : "SignIn",
    component : SigninComponent
  },
  {
    path : "Register",
    component : RegisterComponent
  },
  {
    path : "OrgRegister",
    component : OrgRegisterComponent
  },
  {
    path : "PatRegister",
    component : PatRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
