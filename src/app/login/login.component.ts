import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/DataService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './style.css','./style1.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    classificationndiv: boolean;
    types:string[];
    username:string
    password:string
    usernameVal:string;
     ftypeVal:string;
   passwordVal:string;
   matched: boolean;
   userRole:string;
   errorMessage:string;
   moduleltype:string;
   loginusers = ['laxmand-admin-Admin','admin-admin-Admin', 'user-user-User'];
   
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService
        ) {
        }

    ngOnInit() {
        localStorage.setItem('currentUser', "");
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            moduleltype: ['',Validators.required] 
        });
        this.classificationndiv = false;
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }



ordermanagements = ['Order booking prediction', 'Customer classification'];
procurements = ['Procurement cost prediction', 'Supplier performance classification'];
plannings = ['Demand forecasting', 'Forecast fine tuning'];
manufacturings = ['Manufacturing cost prediction', 'Cost of quality prediction','Material planning-consumption forecasting'];
finances = ['AR Invoice payment prediction'];
weatherforecastings = ['Weather parameters prediction'];
//finances = ['AR Invoicing', 'something']


selectedDay: string = '';

moduleltypeVal:string;
optionSelected:string;

    onSubmit() {
        this.errorMessage = "";
        localStorage.setItem('currentUser', "");
        this.submitted = true;
        // stop here if form is invalid
        

         this.usernameVal = this.f.username.value;
         this.passwordVal = this.f.password.value;
         this.moduleltypeVal = this.f.moduleltype.value;
       //  this.ftypeVal = this.f.ftype.value;
        console.log("*******username "+this.usernameVal);
         console.log("*******option selected "+this.moduleltypeVal);
        //  if(this.moduleltypeVal==''){
        //       this.errorMessage = "Please select function area";
        //  }
        //  if (this.loginForm.invalid) {
        //     return;
        // }
      //   console.log("*******ftypeVal "+this.ftypeVal);
        //console.log("*******"+this.countries1[0]);
        // console.log(this.countries[i].split("-")[0]);
        // console.log(this.countries[i].split("-")[1]);
        this.matched = false;
       for (var i = 0; i < this.loginusers.length; i++) {
        if(this.usernameVal ==this.loginusers[i].split("-")[0] && this.passwordVal ==this.loginusers[i].split("-")[1] ){
            this.userRole =this.loginusers[i].split("-")[2];
            localStorage.setItem('userRole', this.userRole);
            this.matched = true;
            break;
        }
       }
       if(this.matched){
           console.log("@@@@@@  matched");
            var user = {
                 username: this.usernameVal,
                 password: this.passwordVal,
                 firstName: "Inspirage",
                 lastName: "Admin"
            };
              this.loading = true;
            this.dataService.setUserName(this.f.username.value);
             localStorage.setItem('currentUser', this.f.username.value);
             localStorage.setItem('ftype', this.moduleltypeVal);
             this.router.navigate(["/home"]);
       }else{
           //alert("Invalid UserName / Password");
       this.errorMessage = "Invalid UserName / Password";
       }
    }
}
