import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../module/model.user';
import { UserDataServiceService } from '../../user-data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   private user:User;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router, private userService: UserDataServiceService){

  }
  ngOnInit() {
    this.user = new User();
  }

  login(){
    console.log("user: " + this.user.username + " password: " + this.user.password);
    this.userService.setUserName(this.user);
    this.router.navigate(['home']); 
  }

}
