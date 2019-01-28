import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  public newUser: User;
  constructor() { }
  pushNewUser() {
    return {};
  }
}
