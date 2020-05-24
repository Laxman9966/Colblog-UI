import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {
    private fileType : string;
    private userName : string;
    constructor(private httpClient: HttpClient) { }

//    getCSVData() {
//    return  this.httpClient.get('assets/sample-valid.csv', {responseType: 'text'})
//    .subscribe(
//        data => {
//            console.log("DATA: " JSON.stringify(data));
//        },
//        error => {
//            console.log(error);
//        }
//    );
//    }
    filepath = 'E:\\AngularProject\\angular2FileUpload\\node-app\\uploads\\sample-valid.csv';   //assets/sample-valid.csv
    
   // fileUri = 'http://localhost:3001/readFileData/:filename';     
  //  fileHeadersUri = 'http://localhost:3001/getHeaders/:filename';
    fileUri = 'http://localhost:3001/readFileData/';     
    fileHeadersUri = 'http://localhost:3001/getHeaders/';    
    saveModelDataUri = 'http://localhost:3001/saveModelData'; 
    jsonFileUri = 'http://localhost:3001/getJSONFileData/filename';     
      
    saveUserRoleDataUri = 'http://localhost:3001/saveUserRoleData'; 
    
     getFileHeaders(filename: string) {
         console.log("SERVICE:  "+filename);
    return  this.httpClient.get(this.fileHeadersUri+filename);
     }
     
     getCSVFileData(filename: string) {
    return  this.httpClient.get(this.fileUri+filename);
     }
     
     getJSONFileData(filename: string) {
    return  this.httpClient.get(filename);
     }
     
     saveModelData(data: any){
         console.log('Service saveModelData() '+data)
          return this.httpClient.post(this.saveModelDataUri,data);
     }
     
      saveUserRoleData(data: any){
         console.log('Service saveModelData() '+data)
          return this.httpClient.post(this.saveUserRoleDataUri,data);
     }
     
     
      getProcessingStatus(filename: string){
          console.log('Service getProcessingStatus() called '+filename);
         return this.httpClient.get(filename);
     }

     
    
    //  callPython(PAYTHON_API : string){
    //      console.log('#########  Service callPython() ')
    //       return this.httpClient.post(PAYTHON_API);
    //  }
     
    setFileType(fileType : string){
        this.fileType = fileType;
    }
    getFileType(){
        return this.fileType;
    }

    setUserName(userName : string){
        this.userName = userName;
    }

    getUserName(){
        return this.userName;
    }
     
     
   
   
}