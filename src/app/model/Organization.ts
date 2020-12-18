export class Organization {
  orgId: number;
  name: String;
  description: String;
  password: String;
  email: String;
  logo: String;
  constructor() {
    this.orgId = 0;
    this.name = '';
    this.description = '';
    this.password = '';
    this.email = '';
    this.logo = '';
  }
}
