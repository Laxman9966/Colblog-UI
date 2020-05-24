import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/DataService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const URL = 'http://localhost:3001/upload';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.css']
})
export class ViewreportComponent implements OnInit {

  constructor(
   private router: Router,
  private httpClient: HttpClient,
  private dataService: DataService,
  ) { }

  ngOnInit() {
      
      this.readFileData();
  }
  
  isSubmitted : boolean;
  private sometext : string
    csvRecords = [];
  csvDataRecords;
  selected;
   headersList =[];
  regressiondiv : boolean
  classificationndiv : boolean;
  headersdiv : boolean;
  isValidFormSubmitted: boolean = null;
  errorMessage:string;
  submittedData:string;
  dataArray=[];
  
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
          this.dataArray.push(csvRecordsArray[i].split(','))
      }
      console.log(this.dataArray);
      });
      // let csvRecordsArray = data.split(/\r\n|\n/);
  }
  


}
