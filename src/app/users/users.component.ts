import { Component, OnInit } from '@angular/core';
import { UserTypeService } from '../services/user-type.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userTypes: string[];

  constructor(private userTypeService: UserTypeService) { }

  ngOnInit(): void {
    this.userTypes = this.userTypeService.getUserTypes();
  }

}
