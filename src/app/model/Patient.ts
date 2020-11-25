export class Patient{
    patientId : number
    name : String;
	password : String;
    email : String;
    disease : String
    symptoms : String
    medicalHistory : String
    phone : String
    address : String
    dob : String
    constructor(){
        this.patientId=0
        this.name = ''
        this.password = ''
        this.email = ''
        this.disease = ''
        this.symptoms = ''
        this.medicalHistory = ''
        this.phone = ''
        this.address = ''
        this.dob = ''
    }
}