import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import { UserService } from '../services/userservice';
import {JobseekerService} from "../services/jobseekerservice";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-jobseeker',
  templateUrl: './add-jobseeker.component.html',
  styleUrls: ['./add-jobseeker.component.css']
})
export class AddJobseekerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private jobseekerService: JobseekerService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      
      /*email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]*/

      name: ['', Validators.required],
      resumeTitle: ['', Validators.required],
      experience: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],



    });

  }

  onSubmit() {
    this.jobseekerService.saveJobSeeker(this.addForm.value)
      .subscribe( data => {
        console.log("************ jobseeker saveJobSeeker "+JSON.stringify(data));
        this.router.navigate(['list-jobseeker']);
      });
  }
}
