import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { JobSeeker }  from '../model/jobseeker';
import { HttpClient } from '@angular/common/http';
import {ApiServices} from "../services/apiservices";

@Injectable()
export class JobseekerService {

    constructor(private http: HttpClient,public apiservice: ApiServices ) { }
    baseUrl: string = 'http://localhost:8080/user-portal/users';
  


    getAllJobSeekers() {
      /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
       {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
       {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
       {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
     ];
     return Observable.of(fakeUsers).delay(5000);*/
     // return this.http.get<User[]>(this.baseUrl);

      return this.apiservice.get_service(ApiServices.apiList.getAllProfiles);
    }
  
    getProfileDetails(id: number) {
     // return this.http.get<User>(this.baseUrl + '/' + id);
     return this.apiservice.get_service(ApiServices.apiList.getProfileDetails+ '/' + id);
    }
  
    saveJobSeeker(user: JobSeeker) {
      console.log('************ JobseekerService saveJobSeeker '+ JSON.stringify(user) );
      console.log('************ URL '+ ApiServices.apiList.saveJobSeeker );
     return  this.apiservice.post_service(ApiServices.apiList.saveJobSeeker, user );
      //return this.http.post(this.baseUrl, user);
    }
  
    updateJobSeeker(user: JobSeeker) {
      console.log('************ JobseekerService updateJobSeeker '+ JSON.stringify(user) );
     // return this.http.put(this.baseUrl + '/' + user.id, user);
     return  this.apiservice.put_service(ApiServices.apiList.updateJobSeeker+ '/' + user.id, user );
      
    }
  
    deleteUser(id: number) {
      return this.http.delete(this.baseUrl + '/' + id);
    }
    
}