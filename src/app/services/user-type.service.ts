import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  types = [
    "Admins",
    "Professeurs",
    "Eleves"
  ]
  constructor() { }

  getUserTypes(){
    return this.types.slice();
  }
}
