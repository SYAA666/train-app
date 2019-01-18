import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { User } from '../user';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-poeple',
  templateUrl: './poeple.component.html',
  styleUrls: ['./poeple.component.css'],
})
export class PoepleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  persons: User[];
  ngOnInit(): void {
    if(this.peopleService.usersCollectionHolder === undefined) {
      this.peopleService.getPeople().subscribe(peoples => {
        this.persons = peoples;
        this.peopleService.usersCollectionHolder = this.persons;
      });
    } else {
      this.persons = this.peopleService.usersCollectionHolder;
    }
  }
}
