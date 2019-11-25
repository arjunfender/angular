import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'MyFirstAngularAp';
  data = {name:"arjun"};
  months =['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec',];
  isavailable = false;
  a=21;
  b=25;
  name = ""
  myClickFunction(a)
  {
    alert("function is working");
    console.log(a);
  }

}
