import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/DataService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
        
        console.log("&&&&&&& USER ROLE: "+this.userRole);
           var data = {
                "userRole":this.userRole
            }
            //CALLING API and reset form
              this.dataService.saveUserRoleData(data).subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
          );
         
        
         if(user=="" || user ==='undefined')
         this.router.navigate(["/login"]);
         this.datatablediv = false;
         var fileName = ' ';
          var fileext = ' ';
        
       // isFileType : boolean;
        
    this.uploader.onAfterAddingFile = (file) => {
        this.showProgressBar=true;
        this.ferrorr=false;
        console.log("*** FILE NAME:  "+file.file.name);
        fileName = file.file.name;
        fileext = fileName.toUpperCase().split(".")[1].trim();
             if(fileext==="CSV" || fileext==="XLSX" ){
                  file.withCredentials = false;
                  this.fileUploadErrorMessage ="";
				//  fileName = fileName;
				  this.showFileName = true
             }else{
             this.ferrorr=true;
                  this.fileUploadErrorMessage ="Please upload csv or excel file format only"
                  return ;
             }
      };

     // if(isFileType)
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         this.showProgressBar=true;
          fileName = item.file.name;
         if(fileName != ""){
             fileext = fileName.toUpperCase().split(".")[1].trim();
             if(fileext==="CSV" || fileext==="EXCEL" ){
                 localStorage.setItem("filename",item.file.name);
                 console.log('ImageUpload:uploaded:', item, status, response);
                 //alert('File uploaded successfully');
                //document.getElementsByName("file")="";
                item.file.name="";
                 //this.refresh();
                this.readFileData()
                this.datatablediv = true;
                this.showProgressBar=false;
             }else{
                 console.log("*** IN ELSE***:  ");
                 this.fileUploadErrorMessage = 'Please uploaded csv or excel file format only';
                // alert('Please uploaded csv or excel file format only');
                // this.refresh();
             }
         }
         else{
              console.log("***1MMM IN ELSE:  ");
               this.fileUploadErrorMessage ="Please upload csv or excel file format only"
             //alert('Please uploaded csv or excel file format only');
            // this.refresh();
        }
    };
     //this.getFileHeaders();
    // types=['Select-Model'];
  }
  






constructor(
  private router: Router,
  private httpClient: HttpClient,
  private dataService: DataService,
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
  
  
    readFileData(){
      if(this.isSubmitted){
          return "";
      }
      this.isSubmitted = true;
      this.sometext = "printing this text from string var";
      console.log("readData Called");
      
      var filename =  localStorage.getItem('filename');
            console.log("FILE NAME: "+filename);
            
//       var filename =  localStorage.getItem('filename');
//        console.log("FILE NAME: "+filename);
//        filename = "sample-valid.csv";
            
      let data = this.dataService.getCSVFileData(filename).subscribe(data =>{
      console.log(typeof data);
      console.log("******* API FILE DATA " +data);
      this.csvDataRecords = data;
      
       //this.csvDataRecords.push(data);
      console.log("ARRAY "+this.csvDataRecords);
      let csvRecordsArray = this.csvDataRecords.split(/\r\n|\n/);
      this.headersList = csvRecordsArray[0].split(',');
      console.log("==> "+this.headersList);
      
      console.log(typeof csvRecordsArray[1]);
      console.log(csvRecordsArray.length);
      
      for(let i =1; i<csvRecordsArray.length; i++){
          if(i<5)
          this.dataArray.push(csvRecordsArray[i].split(','))
      }
      console.log(this.dataArray);
      });
      // let csvRecordsArray = data.split(/\r\n|\n/);
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




}
