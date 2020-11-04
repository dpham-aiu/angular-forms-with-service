import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  msg: string;
  constructor() {}

  ngOnInit(): void {}
  checkLogin(userObj): void {
    if (userObj.Username === 'Danny' && userObj.Password === '123@AB') {
      this.msg = 'Succesfully Login!~';
    } else {
      this.msg = 'Failure to login';
    }
  }
}
