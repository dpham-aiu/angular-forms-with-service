import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  userRef = new FormGroup({
    uname: new FormControl(),
    pword: new FormControl(),
  });
  constructor() {}

  ngOnInit(): void {}

  checkUser(): void {
    if (
      this.userRef.value.uname == 'Danny' &&
      this.userRef.value.pword == '123'
    ) {
      console.log('Sucessfully logged in.,');
    } else {
      console.log('Failure to login.');
    }
  }
}
