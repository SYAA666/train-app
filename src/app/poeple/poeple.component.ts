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
    this.peopleService.getPeople().subscribe(peoples => {
      console.log(peoples);
      this.persons = peoples;
      console.log(this.persons);
    });
  }
}
