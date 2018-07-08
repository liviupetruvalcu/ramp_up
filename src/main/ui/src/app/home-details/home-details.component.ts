import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from '../user-data-service.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {


  name: any;

  constructor(private userDetails: UserDataServiceService) { }

  ngOnInit() {
    this.userDetails.userName.subscribe(data => {
      this.name = data.username;
    })
  }

}
