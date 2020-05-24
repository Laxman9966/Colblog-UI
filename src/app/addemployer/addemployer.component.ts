import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import { UserService } from '../services/userservice';
import {EmployerService} from "../services/employerservice";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addemployer',
  templateUrl: './addemployer.component.html',
  styleUrls: ['./addemployer.component.css']
})
export class AddEmployerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private employerService: EmployerService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      companyName: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.employerService.saveEmployer(this.addForm.value)
      .subscribe( data => {
        console.log("************ jobseeker saveJobSeeker "+JSON.stringify(data));
        this.router.navigate(['list-employer']);
      });
  }

}
