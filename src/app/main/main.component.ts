import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  userData: User;

  constructor(private peopleService: PeopleService) { }
  formatName(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });  }
  ngOnInit() {
    this.userData = this.peopleService.transferData;
    this.userData.name = this.formatName(this.userData.name);
  }
}
