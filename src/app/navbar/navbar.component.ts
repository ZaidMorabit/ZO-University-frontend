import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  collapsed= true;
  isAuth: boolean;
  subscription: Subscription;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuth =  this.authService.getStatus();
    this.subscription =  this.authService.authChanged.subscribe((authStatus: boolean)=>{
      this.isAuth = authStatus;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAuth(){
    if(this.isAuth){
      this.authService.logout();
    }else{
      this.authService.login();
    }
    
  }

}
