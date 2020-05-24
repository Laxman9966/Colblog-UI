import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { environment } from 'src/environments/environment';

// @Injectable({
//     providedIn: 'root'
//   })


@Injectable()  
export class ApiServices {

  baseUrl: string =  'http://localhost:8080';

    constructor(
        private http: HttpClient,
    //    private toastr: ToastrService,
        public activatedRoute: ActivatedRoute,
        private router: Router
      ) {}

    ngOnInit() {

    }
    public static apiList = {
        // addEmployer: '/employer-service/employer/addEmployer',
        // updateEmployer: 'employer/updateEmployer',
        // getAllEmployers: 'employer/getEmployers',
        // getEmployerDetails: 'employer/getEmployerDetails',
        // getJobDetails: 'jobposting/getjobdetails',
        // getAllJobs: '/jobseeker-service/searchjobs/getAlljobs',
        saveJobSeeker: '/jobseeker-service/jobseeker/saveJobSeeker',
        getAllProfiles: '/jobseeker-service/jobseeker/getAllProfiles',
        getProfileDetails : '/jobseeker-service/jobseeker/getProfileDetails',
        updateJobSeeker: '/jobseeker-service/jobseeker/updateProfileStudent',
       // loginUrl: 'user/login',
        loginUrl: 'user/login',
    }
       

    public static employerApiList = {
      getMesssage:'/employer-service/employer/getMesssage',
      getAllEmployers: '/employer-service/employer/getEmployers',
      getEmployerDetails: '/employer-service/employer/getEmployerDetails',
      saveEmployer: '/employer-service/employer/addEmployer',
      updateEmployer: '/employer-service/employer/updateEmployer',
    //  getJobDetails: 'jobposting/getjobdetails',
     // getAllJobs: '/jobseeker-service/searchjobs/getAlljobs',

      
  }

  /*      Add Employer
http://localhost:9098/employer/addEmployer

Update Employer
http://localhost:9098/employer/updateEmployer/1

Get All Employers
http://localhost:9098/employer/getEmployers

Get Employer details
http://localhost:9098/employer/getEmployerDetails/3

Get Job Details
http://localhost:9098/jobposting/getjobdetails/2

Get all Jobs
http://localhost:8098/searchjobs/getAlljobs

Get Job Details
http://localhost:8098/jobposting/getJobDetails/3

Create Job Seeker Profile
http://localhost:8098/jobseeker/saveJobSeeker

Get All Profiles
http://localhost:8098/jobseeker/getAllProfiles

update Job Seeker
http://localhost:8098/jobseeker/updateProfileStudent/1

API GATEWAY URLS
http://localhost:8080/category-service/users/user/

*/

 


    post_service(url : string, data : any) {
      console.log('@@@@@   URL ' + url);
        var localStorageVariable = '';
        if (localStorage.getItem('authToken')) {
          localStorageVariable = localStorage.getItem('authToken');
        }
        let headerJson = {
          'Content-Type': 'application/json',
          'Authorization': localStorageVariable
        };
        const httpOptions = {
          headers: new HttpHeaders(headerJson)
        };
    
        return this.http.post(this.baseUrl + url, data, httpOptions).map((response) => {
          return response;
        }).catch(this.handleError);
    
      }


      put_service(url : string, data : any) {
        console.log('@@@@@   URL ' + url);
          var localStorageVariable = '';
          if (localStorage.getItem('authToken')) {
            localStorageVariable = localStorage.getItem('authToken');
          }
          let headerJson = {
            'Content-Type': 'application/json',
            'Authorization': localStorageVariable
          };
          const httpOptions = {
            headers: new HttpHeaders(headerJson)
          };
      
          return this.http.put(this.baseUrl + url, data, httpOptions).map((response) => {
            return response;
          }).catch(this.handleError);
      
        }

      get_service(url : string) {

        var localStorageVariable = '';
        if (localStorage.getItem('authToken')) {
          localStorageVariable = localStorage.getItem('authToken');
        }
        let headerJson = {
          'Content-Type': 'application/json',
          'Authorization': localStorageVariable
        };
        const httpOptions = {
          headers: new HttpHeaders(headerJson)
        };
    
        return this.http.get(this.baseUrl + url, httpOptions).map((response) => {
          return response;
        }).catch(this.handleError);
    
      }


      private handleError(errorObj: HttpErrorResponse | any) {
        const _self = this;
        let errorMessage: string;
        let body: any;
    
        // check whether we are connected to the internet not using navigator online
        if (navigator.onLine) {
          if (errorObj instanceof HttpErrorResponse) {
            if ((errorObj.ok === false && errorObj.status === 0)) {
              errorMessage = 'Site is Under Maintenance. Please try again after sometime.';
              // $("#siteDownModal").modal('show');
            } else if (errorObj.status === 500) {
              errorMessage = "Something went wrong from server side.. Please try again later", "Error!";
            }
            else if (errorObj.status == 403 || errorObj.status == 401) {
              localStorage.setItem("authToken", '');
              localStorage.setItem("role", "");
              localStorage.setItem("sourceID", "");
              localStorage.setItem("userMenu", "");
              localStorage.setItem("userName", "");
              //  this.router.navigateByUrl('/');
              if (errorObj.error.message == 'Invalid credentials !') {
                errorMessage = errorObj.error.message;
              } else {
                errorMessage = "User unauthorized or Token Expired", "Error!";
                setTimeout(() => {
                  window.location.href = "/";
                }, 600);
    
              }
    
    
            }
            else {
              body = errorObj.error || '';
              errorMessage = body.message;
              if (body.status === 101 || body.status === 107 || body.status === 500 || body.status === 403 || body.message === 'Session Expired') {
                //this.toastr.error(errorMessage, "Error!");
              }
            }
          }
        } else {
          errorMessage = "No internet connection..Please try again after sometime!!"
        }
        return Observable.throw(errorMessage);
      }
    

}