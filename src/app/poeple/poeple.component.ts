import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
@Component({
  selector: 'app-poeple',
  templateUrl: './poeple.component.html',
  styleUrls: ['./poeple.component.css'],
})
export class PoepleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  persons;

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(peoples => {
      this.persons = peoples;
    });
  }
}
