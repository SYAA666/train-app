import {Component, OnInit} from '@angular/core';
import { PeopleService } from '../services/people.service';
import { SortingService } from '../sorting/sorting.service';
import { User } from '../user';

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
    document.querySelectorAll('.tab')[1].classList.add('active');
    document.querySelectorAll('.tab')[2].classList.remove('active');
    document.querySelectorAll('.tab')[3].classList.remove('active');

  }
  sortWithUsername() {
    this.sortingService.byUserName(this.persons);
    document.querySelectorAll('.tab')[2].classList.add('active');
    document.querySelectorAll('.tab')[1].classList.remove('active');
    document.querySelectorAll('.tab')[3].classList.remove('active');
  }
  sortWithPhone() {
    this.sortingService.byPhone(this.persons);
    document.querySelectorAll('.tab')[3].classList.add('active');
    document.querySelectorAll('.tab')[1].classList.remove('active');
    document.querySelectorAll('.tab')[2].classList.remove('active');
  }
  disableSort() {
    this.persons = PeopleService.copyCollection(this.sortingService.unSortedCollection);
    document.querySelectorAll('.tab')[3].classList.remove('active');
    document.querySelectorAll('.tab')[1].classList.remove('active');
    document.querySelectorAll('.tab')[2].classList.remove('active');
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
