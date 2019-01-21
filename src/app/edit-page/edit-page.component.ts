import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { EditingService } from '../editing-service/editing.service';
import { User } from '../user';

interface IDConstructir {
  letters: string;
  code: string;
}

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  public editingElement: User;
  public number: string;
  public id: IDConstructir;
  public name: string;
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
  saveWhenExit() {
    let element: User = this.peopleService.usersCollectionHolder.find((obj) => obj.login === this.editingElement.login );
    element.phone = this.editingElement.phone;
    element.id = this.editingElement.id;

    // this.peopleService.usersCollectionHolder.find()
  }
}
