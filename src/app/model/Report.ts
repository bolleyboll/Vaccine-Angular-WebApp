export class Report {
  reportId: number;
  result: String;
  description: String;
  orgId: number;
  vaccId: number;
  patientId: number;

  constructor() {
    this.reportId = 0;
    this.result = '';
    this.description = '';
    this.orgId = 0;
    this.vaccId = 0;
    this.patientId = 0;
  }
}
