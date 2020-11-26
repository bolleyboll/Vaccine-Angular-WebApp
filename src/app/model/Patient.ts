export class Patient{
    patientsId : number
    name : String;
	password : String;
    email : String;
    disease : String
    symptoms : String
    medicalHistory : String
    phone : String
    address : String
    dob : String
    orgId: number
    vaccId: number
    constructor(){
        this.patientsId=0
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