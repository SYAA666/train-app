import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PeopleService} from '../services/people.service';
import {User} from '../user';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  transferData: User;
  newUser = this.fb.group({
    title: this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      id: [''],
      age: ['']
    }),
    location: this.fb.group({
      city: [''],
      street: ['']
    }),
    personal: this.fb.group({
      phone: [''],
      userName: [''],
      email: ['']
    }),
    gender: ['']
  });
  constructor(private fb: FormBuilder, private router: Router, private peopleService: PeopleService ) { }
  ngOnInit(): void {
    console.log(this.peopleService.usersCollectionHolder);
  }

  onSubmit() {
    this.transferData = {
      name: this.newUser.value.title.firstName + ' ' + this.newUser.value.title.lastName,
      gender: this.newUser.value.gender,
      age: this.newUser.value.title.age,
      login: this.newUser.value.personal.userName,
      phone: this.newUser.value.personal.phone,
      image: 'https://pixel.nymag.com/imgs/daily/intelligencer/2014/06/04/04-slenderman-3.w700.h700.jpg',
      id: this.newUser.value.title.id,
      location: this.newUser.value.location,
      email: this.newUser.value.personal.email
    };
    this.peopleService.usersCollectionHolder.unshift(this.transferData);
    console.log('submitted');
    console.log(this.newUser.value);
    this.router.navigate(['/app-people']);
  }
}
