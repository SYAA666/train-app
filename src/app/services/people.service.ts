import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: Http) { }
  getPeople() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,phone,picture,dob,login&results=12')
      .pipe(map((response: Response) => response.json()))
      .pipe(map(response => response.results))
      .pipe(map(users => {
        return users.map(user => {
          return {
            name: `${user.name.first} ${user.name.last}`,
            gender: `${user.gender}`,
            age: `${user.dob.age}`,
            login: `${user.login.username}`,
            phone: user.phone,
            picture: user.picture
          }
        })
      }))
      

  }
}
