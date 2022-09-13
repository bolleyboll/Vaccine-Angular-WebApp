import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './model/login';
import { Organization } from './model/Organization';
import { Patient } from './model/Patient';
import { Vaccine } from './model/Vaccine';
import { Report } from './model/Report';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'someToken',
  }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public partners: Organization[];
  public vaccines: Vaccine[];
  public reports: Report[];
  patients: Patient[];
  currentuser: Patient;
  currentorg: Organization;
  currentVaccine: Vaccine;
  vaccs: Vaccine[];
  isLoggedIn: Boolean = false;
  constructor(public http: HttpClient) {
    this.partners = [];
    this.vaccines = [];
    this.reports = [];
  }

  signInOrg(login) {
    return this.http.post(
      'http://localhost:8081/org/signin',
      login,
      httpOptions
    );
  }
  signInPat(login) {
    return this.http.post(
      'http://localhost:8081/patient/signin',
      login,
      httpOptions
    );
  }
  patRegister(pat) {
    return this.http.post('http://localhost:8081/patient/signup', pat);
  }
  orgRegister(org) {
    return this.http.post('http://localhost:8081/org/signup', org);
  }
  patUpdate(pat) {
    return this.http.put(
      'http://localhost:8081/patient/update',
      pat,
      httpOptions
    );
  }
  showPartners() {
    return this.http.get('http://localhost:8081/partners');
  }
  showVaccines() {
    return this.http.get('http://localhost:8081/vaccines');
  }
  showVaccinesOrgName() {
    return this.http.get('http://localhost:8081/partners');
  }
  getOrg(id) {
    return this.http.get('http://localhost:8081/org/' + id);
  }
  addVaccine(vaccine: Vaccine) {
    return this.http.post(
      'http://localhost:8081/vaccine/add',
      vaccine,
      httpOptions
    );
  }
  getResult(id) {
    return this.http.get(
      'http://localhost:8081/patient/' + id + '/report',
      httpOptions
    );
  }
  getVacc(id) {
    return this.http.get('http://localhost:8081/vaccine/id/' + id);
  }
  getVaccineByOrgId(id) {
    return this.http.get(
      'http://localhost:8081/org/' + id + '/vaccines',
      httpOptions
    );
  }
  getVaccD(disease) {
    return this.http.get(
      'http://localhost:8081/vaccine/disease/' + disease,
      httpOptions
    );
  }
  getDistinctDisease() {
    return this.http.get('http://localhost:8081/distinct/disease');
  }
  orgUpdate(org) {
    return this.http.put('http://localhost:8081/org/update', org, httpOptions);
  }
  vaccUpdate(vacc) {
    return this.http.put(
      'http://localhost:8081/vaccine/update',
      vacc,
      httpOptions
    );
  }
  getPatientsByDisease(disease) {
    return this.http.get(
      'http://localhost:8081/unenrolledpatients/' + disease,
      httpOptions
    );
  }
  getPatient(id) {
    return this.http.get('http://localhost:8081/patient/' + id, httpOptions);
  }
  addReport(rep) {
    return this.http.post('http://localhost:8081/report/add', rep, httpOptions);
  }
  getVacReport(id) {
    return this.http.get(
      'http://localhost:8081/report/vaccine/' + id,
      httpOptions
    );
  }
  getPatientByOrgId(id) {
    return this.http.get(
      'http://localhost:8081/org/' + id + '/patients',
      httpOptions
    );
  }
  updateReport(report) {
    return this.http.put(
      'http://localhost:8081/report/update',
      report,
      httpOptions
    );
  }
}
