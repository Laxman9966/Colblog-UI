import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//import { UserService } from './services/user-service';
//import { User } from './domain/user';

@Component({
  selector: 'app-readicheckboxes',
  templateUrl: './readicheckboxes.component.html',
  styleUrls: ['./readicheckboxes.component.css']
})
export class ReadicheckboxesComponent implements OnInit {

  constructor() { }
  //constructor(private userService: UserService) {}
        
  ngOnInit() {
  }
  
isValidFormSubmitted: boolean = null;
//user = new User();

	userForm = new FormGroup({
	   uname: new FormControl('', Validators.required),
	   gender1: new FormControl('', Validators.required),
           gender2: new FormControl('', Validators.required),
           
           gender11: new FormControl('', Validators.required),
           gender12: new FormControl('', Validators.required),
           gender13: new FormControl('', Validators.required),
           gender14: new FormControl('', Validators.required),
	   married: new FormControl(false),
	   tc: new FormControl('', Validators.requiredTrue)
	});
        
	
        radio1change(){
             console.log("Gender: " + this.userForm.get('gender1').value);
             if(this.userForm.get('gender1').value=='male')
             this.userForm.controls['gender1'].reset();
            // if()
            // this.ttesub6 = false;
        }
		
        onFormSubmit() {
	   this.isValidFormSubmitted = false;
	   if(this.userForm.invalid){
		return;	
	   } 	
	   this.isValidFormSubmitted = true;	
	   console.log(this.userForm.valid);
           
           console.log("Gender: " + this.userForm.get('gender11').value);
           
           console.log("User Name: " + this.userForm.get('uname').value);
	   console.log("Gender: " + this.userForm.get('gender1').value);
           console.log("Gender: " + this.userForm.get('gender2').value);
	   console.log("Married?: " + this.userForm.get('married').value);
	   console.log("T & C accepted?: " + this.userForm.get('tc').value);
           
//	   this.user.userName = this.userForm.get('uname').value;
//	   this.user.gender = this.userForm.get('gender').value;
//	   this.user.isMarried = this.userForm.get('married').value;
//	   this.user.isTCAccepted = this.userForm.get('tc').value;
//	   this.userService.createUser(this.user);
           	 
	   this.reset();
	}
        
        
        
//        createUser(user: User) {
//           //Log user data in console
//           console.log("User Name: " + user.userName);
//	   console.log("Gender: " + user.gender);
//	   console.log("Married?: " + user.isMarried);
//	   console.log("T & C accepted?: " + user.isTCAccepted);
//   }   
   
	reset() {
	   this.userForm.reset({
                married: false
	   });	   
	}
        	
	setDefaultValues() {
	   this.userForm.patchValue({uname: 'Krishna', gender:'male', married:true});
	}
        
        
        radioItems = [1, 2, 3,4];
        model = { options: '2' };
        
        	
}
