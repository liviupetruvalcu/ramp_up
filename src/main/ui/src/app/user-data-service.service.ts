import { Injectable } from '@angular/core';
import { User } from './module/model.user';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  private user = new BehaviorSubject<any>([new User()]);
  userName = this.user.asObservable();
  
  constructor() { }

  setUserName(user:User){
    this.user.next(user);
  }
}
