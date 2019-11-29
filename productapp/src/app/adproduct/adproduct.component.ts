import { Component, OnInit } from '@angular/core';
import {Iproduct} from '../products/product.model';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-adproduct',
  templateUrl: './adproduct.component.html',
  styleUrls: ['./adproduct.component.css']
})
export class AdproductComponent implements OnInit {

  constructor(private productService: ProductsService) { }
  productItem = new Iproduct(null,null,null,null,null,null,null,null);
  ngOnInit() {
  }
  AddProduct(){
    this.productService.newProduct(this.productItem);
    alert("success")
  }

}
