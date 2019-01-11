import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-poeple',
  templateUrl: './poeple.component.html',
  styleUrls: ['./poeple.component.css'],
  providers: [PeopleService]
})
export class PoepleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  persons;

  ngOnInit(): void {
    this.persons = this.peopleService.getPeople().subscribe(peoples => console.log(peoples));

  }

  getPeople() {
    let persons = this.peopleService.getPeople().subscribe(peoples => peoples)
    console.log(persons);
  }
}
