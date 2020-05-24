import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {first} from "rxjs/operators";
import {Router} from "@angular/router";

import {JobseekerService} from "../services/jobseekerservice";
import { UserService } from '../services/userservice';
import { User }  from '../model/user';
import { JobSeeker }  from '../model/jobseeker';



@Component({
  selector: 'app-edit-jobseeker',
  templateUrl: './edit-jobseeker.component.html',
  styleUrls: ['./edit-jobseeker.component.css']
})
export class EditJobseekerComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private jobseekerService: JobseekerService) { }




 


  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-jobseeker']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      resumeTitle: ['', Validators.required],
      experience: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
     
    });
    this.jobseekerService.getProfileDetails(+userId)
      .subscribe( data => {
        console.log("************ jobseeker list "+JSON.stringify(data));
        this.editForm.setValue(data);
      });
  }


//updateJobSeeker
  onSubmit() {
    this.jobseekerService.updateJobSeeker(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-jobseeker']);
        },
        error => {
          alert(error);
        });
  }


}
