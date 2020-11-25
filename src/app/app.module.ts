import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { OrgRegisterComponent } from './org-register/org-register.component';
import { PatRegisterComponent } from './pat-register/pat-register.component';
import { AboutComponent } from './about/about.component';

import { OrgHomeComponent } from './org-home/org-home.component';
import { OrgEditProfileComponent } from './org-edit-profile/org-edit-profile.component';

import { PatHomeComponent } from './pat-home/pat-home.component';
import { EditProfilePatComponent } from './edit-profile-pat/edit-profile-pat.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { PatientReportComponent } from './patient-report/patient-report.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavbarComponent,
    IndexComponent,
    RegisterComponent,
    OrgRegisterComponent,
    PatRegisterComponent,
    AboutComponent,
    OrgHomeComponent,
    OrgEditProfileComponent,
    PatHomeComponent,
    EditProfilePatComponent,
    DeletePatientComponent,
    PatientReportComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
