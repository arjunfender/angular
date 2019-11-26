import { Component, OnInit } from '@angular/core';
import{GetusersService} from '../getusers.service'
@Component({
  selector: 'app-studentuser',
  templateUrl: './studentuser.component.html',
  styleUrls: ['./studentuser.component.css']
})
export class StudentuserComponent implements OnInit {

  constructor(public service:GetusersService) { }
  userdata;
  ngOnInit() {
    this.service.getUserService()
    .subscribe((data)=>{
      this.userdata = data;
      console.log(this.userdata);
    })
  }

}
