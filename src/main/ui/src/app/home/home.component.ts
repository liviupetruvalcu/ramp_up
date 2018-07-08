import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataServiceService } from '../user-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: any;

  constructor(private router: Router, private userDataService: UserDataServiceService) { }

  ngOnInit() {
    this.userDataService.userName.subscribe(data => {
      this.username = data.username;
    })
  }

  logout(){
    this.router.navigate(['']); 
  }

}
