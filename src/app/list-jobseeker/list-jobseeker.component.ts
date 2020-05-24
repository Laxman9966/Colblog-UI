import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {JobseekerService} from "../services/jobseekerservice";

import {User} from "../model/user";
import {JobSeeker} from "../model/jobseeker";


@Component({
  selector: 'app-list-jobseeker',
  templateUrl: './list-jobseeker.component.html',
  styleUrls: ['./list-jobseeker.component.css']
})
export class ListJobseekerComponent implements OnInit {

 // users: User[];
  jobseekers: JobSeeker[];


  constructor(private router: Router, private jobseekerService: JobseekerService) { }

  ngOnInit() {
    console.log("************in List JobSeeker TS ")
    this.jobseekerService.getAllJobSeekers()
      .subscribe( data => {
        console.log("************ jobseeker list "+JSON.stringify(data));
        this.jobseekers = data;
      });
  }

  deleteUser(user: JobSeeker): void {
    this.jobseekerService.deleteUser(user.id)
      .subscribe( data => {
        this.jobseekers = this.jobseekers.filter(u => u !== user);
      })
  };

  editUser(user: JobSeeker): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-jobseeker']);
  };

  addUser(): void {
    this.router.navigate(['add-jobseeker']);
  };





}
