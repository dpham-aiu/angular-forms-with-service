import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class FakeService2 {
  constructor(private http: HttpClient) {} //DI for HttpClient
  restAPIURL = 'https://jsonplaceholder.typicode.com/todos';
  grabData(): Observable<Fake[]> {
    return this.http.get<Fake[]>(this.restAPIURL);
  }
}

//Model Class -- this class helps to map json data form rest API
export class Fake {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public completed: boolean
  ) {}
}
