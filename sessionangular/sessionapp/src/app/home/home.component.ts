import { Component, OnInit, Inject } from '@angular/core';

import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginName:string;
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,private router:Router) { }

  ngOnInit() {
    if(this.storage.get("uname")=="arjun"){
      this.loginName = "calicut";
    }
    else if(this.storage.get("uname")=="ajay"){
      this.loginName ="malappuram"
    }
    else{
      this.router.navigate(['login'])
    }
    }
    logout(){
      alert("Hai logut !!!!!!!");
      this.storage.remove("uname");
      this.router.navigate([""]);
    }
  }