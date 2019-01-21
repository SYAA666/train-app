import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class EditingService {
  public editingUser: User;
  constructor() { }
  changeName(data: string) {
    if (this.editingUser) {
      this.editingUser.name = data;
    }
  }
  changePhone(data: number) {
    if (this.editingUser.phone) {
      this.editingUser.phone = String(data);
    }
  }
  changeEmail(data: string) {
    if (this.editingUser) {
      this.editingUser.email = data;
    }
  }
}

