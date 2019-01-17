import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { User } from '../user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [PeopleService]

})
export class CardComponent implements OnInit {
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  sendUserData() {
    this.peopleService.data = this.cardData;
    console.log('card send: '+this.peopleService.data.name+' data');
  }

  @Input() cardData: User;

}
