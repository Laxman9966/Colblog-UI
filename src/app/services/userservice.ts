import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {


  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';

  private upersons: User[] = [
    {
      id: 1,
      firstName: 'Durgesh',
      lastName: 'Pal',
      email:'abc@gmail.com'
    },
    {
      id: 2,
      firstName: 'Ankur',
      lastName: 'Pal',
      email:'abcd@gmail.com'
    }
  ];



  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }



  getUsers() {
    /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakeUsers).delay(5000);*/
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserJobSeekerById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createJobSeekerUser(user: User) {
    console.log('****** Inside User Service ' + JSON.stringify(user));
    return this.http.post(this.baseUrl, user);
  }

  updateJobSeekerUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteJobSeekerUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}