import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  newUser = this.fb.group({
    title: this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      id: ['']
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
  constructor(private fb: FormBuilder, private router: Router) { }

  onSubmit() {
    console.log('submitted');
    console.log(this.newUser.value);
    if(this.newUser.status === 'valid' ) {
      this.router.navigate(['/app-people']);
    }
  }
}
