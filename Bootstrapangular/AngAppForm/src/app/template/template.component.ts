import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  model:any=[];

  onsubmit(){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

}
