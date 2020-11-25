export class Patient{
    id : number
    name : String;
	password : String;
    email : String;
    disease : String
    symptoms : String
    medicalHistory : String
    phone : String
    address : String
    constructor(){
        this.id=0
        this.name = ''
        this.password = ''
        this.email = ''
        this.disease = ''
        this.symptoms = ''
        this.medicalHistory = ''
        this.phone = ''
        this.address = ''
    }
}