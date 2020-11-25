import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddVaccComponent } from './add-vacc/add-vacc.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { EditProfilePatComponent } from './edit-profile-pat/edit-profile-pat.component';
import { IndexComponent } from './index/index.component';
import { OrgDeleteComponent } from './org-delete/org-delete.component';
import { OrgEditProfileComponent } from './org-edit-profile/org-edit-profile.component';
import { OrgHomeComponent } from './org-home/org-home.component';
import { OrgRegisterComponent } from './org-register/org-register.component';
import { OrgVaccComponent } from './org-vacc/org-vacc.component';
import { PatHomeComponent } from './pat-home/pat-home.component';
import { PatRegisterComponent } from './pat-register/pat-register.component';
import { PatientReportComponent } from './patient-report/patient-report.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { VaccEditComponent } from './vacc-edit/vacc-edit.component';

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
  {
    path : 'home/patient',
    component : PatHomeComponent
  },
  {
    path : 'edit/profile/patient',
    component : EditProfilePatComponent
  },
  {
    path : 'delete/patient',
    component : DeletePatientComponent
  },
  {
    path : 'report/patient',
    component : PatientReportComponent
  },
  {
    path : 'delete/org',
    component : OrgDeleteComponent
  },
  {
    path : 'org/vacc',
    component : OrgVaccComponent
  },
  {
    path : 'org/vacc/edit',
    component : VaccEditComponent
  },
  {
    path : 'org/vacc/add',
    component : AddVaccComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
