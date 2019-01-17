import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { User } from '../user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  sendUserData() {
  }

  @Input() cardData: User;

}
