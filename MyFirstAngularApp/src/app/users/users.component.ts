import { Component, OnInit } from '@angular/core';
// import{HttpClient} from '@angular/common/http';
import {GetusersService  } from '../getusers.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 
  constructor(public service:GetusersService) { }

  ngOnInit() {
  }
  userdata;
  getUsers(){

    // this.http.get('https://jsonplaceholder.typicode.com/users')
    this.service.getUserService()
    .subscribe((data)=>{
      this.userdata = data;
      console.log(this.userdata);
    })
  }
}
