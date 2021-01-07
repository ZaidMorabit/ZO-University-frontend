import { Injectable } from '@angular/core';
import { on } from 'process';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth= false;
  authChanged = new Subject<boolean>();

  constructor() { }

  getStatus(){
    return this.isAuth;
  }

  login(){
    this.isAuth = true;
    this.authChanged.next(this.isAuth);
  }

  logout(){
    this.isAuth = false;
    this.authChanged.next(this.isAuth);
  }
}
