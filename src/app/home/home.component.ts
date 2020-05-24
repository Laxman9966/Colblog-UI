import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/DataService';
import {EmployerService} from "../services/employerservice";

const URL = 'http://localhost:3001/upload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'file'});
    userName: string;
    uploadedFileName: string;
    fileUploadErrorMessage: string;
    showDatatable: boolean;
    datatablediv: boolean;
    filetype: string;
    showProgressBar: boolean = false;
	showFileName:boolean = false;
    userRole:string;
    functionalArea:string
    ferrorr=false;
    //roleUserType:string
    
     ngOnInit() {
        // this.types =['Select-Model'];
        var user =   localStorage.getItem('currentUser');
        this.userRole =   localStorage.getItem('userRole');
         this.functionalArea =   localStorage.getItem('ftype');
         user = "Admin"
        console.log("&&&&&&& USER ROLE: "+this.userRole);
         if(user=="" || user ==='undefined')
         this.router.navigate(["/login"]);
         this.datatablediv = false;
         var fileName = ' ';
          var fileext = ' ';
  }
  

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private dataService: DataService,
    private employerService:EmployerService
    ) {  this.types=['Select-Model'];}





  
  refresh(): void {
    //window.location.reload();
     // document.getElementById("fileid").value = "";
}

uploadsuccess():void{
    this.datatablediv = false;
    this.refresh();
   // alert("File uploaded successfully!");
}
uploadcancel():void{
    this.datatablediv = false;
    this.refresh();
}

 title = 'app';
  csvRecords = [];
  csvDataRecords;
  selected;
  private sometext : string
  isSubmitted : boolean;
  headersList =[];
  fileHeadersList =[];
  dataArray=[];
  
  selectedDay: string = '';
  selectedFilter:string;
  //public countries: Array<string> = ['Russia', 'USA'];
//countries = ['USA', 'Canada', 'Uk']

//Regression,Classification

regression = ['Linear Regression', 'Support Vector Machine', 'Decision Tree', 'Random Forest Regression']
classification = ['K-Nearest Neighbours', 'Decision Tree', 'Random Forest Classification', 'Naive Bayes']
    
  regressiondiv : boolean
  classificationndiv : boolean;
  headersdiv : boolean;
  isValidFormSubmitted: boolean = null;
  errorMessage:string;
  submittedData:string;
  types:string[];
  modelgif:boolean;
//Regression Classification
  //event handler for the select element's change event
  
  
  
  
  modelForm = new FormGroup({
	   modeltype: new FormControl(),
           linearRegr: new FormControl(),
           spportVectorMachineRegr: new FormControl(),
           decisionTreeRegr: new FormControl(),
           randomForestRegr: new FormControl(),
           knearestNeighboursClass: new FormControl(),
           decisionTreeClass: new FormControl(),
           randomForestClass: new FormControl(),
           naiveBayesClass: new FormControl(),
//           if(this.fileHeadersList !=null || this.fileHeadersList !='undefined'){
//           for(var i=0; i<this.fileHeadersList.length; i++){
//               fileHeadersList[0]:new FormControl(),
//           }
//           }
	});
        
        
   userModelForm = new FormGroup({
	   userhours: new FormControl()
   });    
   userhoursVal:string;
    get userformm() { return this.userModelForm.controls; }
    
     onFormSubmitUser() {
      this.modelgif=true;
       this.userhoursVal = this.userformm.userhours.value;
       localStorage.setItem('userhoursVal', this.userhoursVal);
      console.log("********* Great Form Submitted"+this.userhoursVal);
                  this.router.navigate(["/userdata"]); 
     } 
   
        onRadioChange(){
             console.log("Radio: ");
        }     
        
        
  onFormSubmit() {
     
	}
        
        
        
        
        
        
        
        
        
        reset(modelForm:FormGroup) {
	   this.modelForm.reset({
                //lenearRegr: false
               //this.modelForm.get('modeltype').value=""
	   });	   
	}       
        getFileHeaders(){
            //this.fileHeadersList
            var filename =  localStorage.getItem('filename');
            console.log("FILE NAME: "+filename);
           // filename = "sample-valid.csv"
            
            let data = this.dataService.getFileHeaders(filename).subscribe(data=>{
                var headersdata = data.toString();
                console.log(typeof data);
                console.log("Headers Data:  "+data);
                this.fileHeadersList = headersdata.split(",");
                console.log("Headers List:  "+this.fileHeadersList);
            })
        }
  
  
   

 
  apiInputVal:string;

    onAPIFormSubmit() {
        this.errorMessage = "";
        localStorage.setItem('currentUser', "");
        this.isSubmitted = true;
     //   this.apiInputVal = this.f.apiInput.value;
        console.log("*******username "+this.apiInputVal);
     //   this.matched = false;
}


employerMessage : string ='Default Employer text';

getMesssage(){
console.log('******************************* getMesssage() ');
  this.employerService.getMesssage() 
      .subscribe( data => {
        console.log('******************************* getMesssage() '  +data);
       // console.log("************ jobseeker list "+JSON.stringify(data));
        this.employerMessage = data['companyName'];
      });
}


}
