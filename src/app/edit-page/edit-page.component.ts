import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { EditingService } from '../editing-service/editing.service';
import { User } from '../user';

interface IDConstructor {
  letters: string;
  code: string;
}

interface  NameConstructor {
  first: string;
  last: string;
}

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  public editingElement: User;
  public number: string;
  public id: IDConstructor = {
    letters: '',
    code: ''
  };
  public name: NameConstructor = {
    first: '',
    last: ''
  };
  constructor(
    private peopleService: PeopleService
  ) { }
  ngOnInit(): void {
    this.editingElement = this.peopleService.transferData;
  }
  saveIDString() {
    this.editingElement.id = this.id.letters + this.id.code;
  }
  savePhone() {
    this.editingElement.phone = this.number;
    console.log(this.editingElement.phone);
  }
  saveName() {
    this.editingElement.name = this.name.first + ' ' + this.name.last;
  }
  saveWhenExit() {
    const element: User = this.peopleService.usersCollectionHolder.find((obj) => obj.login === this.editingElement.login );
    element.phone = this.editingElement.phone;
    element.id = this.editingElement.id;
    element.name = this.editingElement.name;
    // this.peopleService.usersCollectionHolder.find()
  }
}
