import { Component } from '@angular/core';
import {Iproduct} from './products/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productapp';
  public show:boolean= false;
  public Image:any ='show';
  
  ngOnInit(){

  }
  
}
