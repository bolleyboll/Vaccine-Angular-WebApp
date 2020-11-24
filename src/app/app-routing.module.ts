import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { OrgEditProfileComponent } from './org-edit-profile/org-edit-profile.component';
import { OrgHomeComponent } from './org-home/org-home.component';
import { OrgRegisterComponent } from './org-register/org-register.component';
import { PatRegisterComponent } from './pat-register/pat-register.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'register/org',
    component: OrgRegisterComponent,
  },
  {
    path: 'register/patient',
    component: PatRegisterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'org/home',
    component: OrgHomeComponent,
  },
  {
    path: 'org/edit-profile',
    component: OrgEditProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
