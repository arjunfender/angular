import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service'
import {Iproduct} from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productObject: ProductsService) { }
  products:Iproduct[];
  Image = 'show'
  key = false;
  ngOnInit(){
    this.productObject.getProducts().subscribe((data)=>{

      // this.products = this.productObject.getProducts();
      this.products=JSON.parse(JSON.stringify(data));
    })
 
  }
  toggle(){
    //alert("hhhhii");
  
  
  if(this.key==false){
    this.key = true;
    this.Image = "Hide";
  }
    else
    {
      this.key = false;
    this.Image = "Show";
    }
}


}
