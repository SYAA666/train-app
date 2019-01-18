import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  users;
  constructor(private peopleService: PeopleService) { }
  ngOnInit() {
    this.users = this.peopleService.usersCollectionHolder;
  }

}
