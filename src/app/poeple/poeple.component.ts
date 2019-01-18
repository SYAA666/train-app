import {Component, OnInit} from '@angular/core';
import { PeopleService } from '../services/people.service';
import { SortingService } from '../sorting/sorting.service';
import { User } from '../user';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-poeple',
  templateUrl: './poeple.component.html',
  styleUrls: ['./poeple.component.css'],
})
export class PoepleComponent implements OnInit {

  constructor(
    private peopleService: PeopleService,
    private sortingService: SortingService
  ) { }
  persons: User[];
  sortWithName() {
    this.sortingService.byName(this.persons);
  }
  sortWithUsername() {
    this.sortingService.byUserName(this.persons);
  }
  sortWithPhone() {
    this.sortingService.byPhone(this.persons);
  }
  disableSort() {
    this.persons = PeopleService.copyCollection(this.sortingService.unSortedCollection);
  }
  ngOnInit(): void {
    if (this.peopleService.usersCollectionHolder === undefined) {
      this.peopleService.getPeople().subscribe(peoples => {
        this.persons = PeopleService.copyCollection(peoples);
        this.peopleService.usersCollectionHolder = PeopleService.copyCollection(peoples);
        this.sortingService.unSortedCollection = PeopleService.copyCollection(peoples);
      });
    } else {
      this.persons = PeopleService.copyCollection(this.peopleService.usersCollectionHolder);
    }
  }
}
