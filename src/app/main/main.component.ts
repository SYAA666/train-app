import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { PeopleService } from '../services/people.service';
import { map,take } from "rxjs/operators"
import 'rxjs/operators/'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  userData: User;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.userData = this.peopleService.transferData;
  }

}
