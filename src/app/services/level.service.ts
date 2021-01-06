import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor() { }

  getLevel(){
    return [1,2,3,4,5]
  }
}
