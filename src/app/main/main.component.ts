import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PeopleService]
})
export class MainComponent implements OnInit {
  userData: User;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.currentData.subscribe(data => { this.userData = data; return this.userData}); 
  }

  clikab() {
    this.peopleService.currentData.subscribe(data => {
      this.userData = data;
    }); 
  }
}
