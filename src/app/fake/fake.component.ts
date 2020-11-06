import { Component, OnInit } from '@angular/core';
import { FakeService1 } from '../fake.service1';
import { Fake, FakeService2 } from '../fake.service2';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css'],
})
export class FakeComponent implements OnInit {
  msg1: string;
  fakeObject: Fake[];

  constructor(private f2service: FakeService2) {} //pull object or DI

  ngOnInit(): void {
    this.f2service.grabData().subscribe(
      (data) => (this.fakeObject = data),
      (error) => console.log(error),
      () => console.log('completed')
    );
  }
  fun1(): void {
    //since it uses new keyword, uses more memory every time function is called.
    // let ff1 = new FakeService1();
    // this.msg1 = ff1.sayHello();
    console.log(this.fakeObject);
  }
}
