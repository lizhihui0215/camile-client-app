import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  private serviceURL = '/user';

  constructor(private http: Http) { }

  sigin(user: User) {
    this.http.post(this.serviceURL, user, { headers: this.headers });
    console.log(user);
  }

}
