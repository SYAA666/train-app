import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public usersCollectionHolder: User[];
  public transferData: User;
  constructor(private http: Http) { }
  static copyCollection(userCollection: User[]) {
    return JSON.parse(JSON.stringify(userCollection));
  }
  getPeople(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,phone,picture,dob,login&results=20')
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
            image: user.picture.large
          };
        });
      }));
  }
}
