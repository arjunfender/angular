import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  sessionVal;
  model: any={}
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService, private router:Router) { }

  ngOnInit() {
  }
  set(){
    if(this.model.uname=="arjun" && this.model.password=="1234"){
    this.storage.set("uname",this.model.uname);
    alert(this.storage.get("uname"));
    this.router.navigate(['home']);
  }
  }
}
  