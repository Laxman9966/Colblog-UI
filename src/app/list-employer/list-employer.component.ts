import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmployerService} from "../services/employerservice";

import {User} from "../model/user";
import {Employer} from "../model/employer";


@Component({
  selector: 'app-list-employer',
  templateUrl: './list-employer.component.html',
  styleUrls: ['./list-employer.component.css']
})
export class ListEmployerComponent implements OnInit {

  users: User[];
  employers: Employer[];


  constructor(private router: Router, private employerService: EmployerService) { }

  ngOnInit() {
    this.employerService.getAllEmployers()
      .subscribe( data => {
        console.log("************ jobseeker list "+JSON.stringify(data));
        this.employers = data;
      });
  }

  deleteUser(user: Employer): void {
    // this.employerService.deleteUser(user.id)
    //   .subscribe( data => {
    //     this.users = this.users.filter(u => u !== user);
    //   })
  };

  editUser(user: Employer): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-employer']);
  };

  addUser(): void {
    this.router.navigate(['add-employer']);
  };



}
