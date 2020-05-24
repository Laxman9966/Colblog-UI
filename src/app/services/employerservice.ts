import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Employer }  from '../model/employer';
import { HttpClient } from '@angular/common/http';
import {ApiServices} from "../services/apiservices";

@Injectable()
export class EmployerService {

    constructor(private http: HttpClient,public apiservice: ApiServices ) { }


    getMesssage(){
      return this.apiservice.get_service(ApiServices.employerApiList.getMesssage);
    }
    getAllEmployers() {
        return this.apiservice.get_service(ApiServices.employerApiList.getAllEmployers);
      }

      getEmployerDetails(id: number) {
        return this.apiservice.get_service(ApiServices.employerApiList.getEmployerDetails +'/'+id);
      }

      saveEmployer(user: Employer) {
        return this.apiservice.post_service(ApiServices.employerApiList.saveEmployer, user);
      }

      updateEmployer(user: Employer) {
        return this.apiservice.put_service(ApiServices.employerApiList.updateEmployer+ '/' + user.id, user );
      }

      deleteUser(id: number) {
        
      }

     // getalljobs
    //  getjobdetails
     // createJobPosting
     // updateJobPosting


}