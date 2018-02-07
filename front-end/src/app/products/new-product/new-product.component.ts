import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private _productService :ProductService) { }

  product = new Product();



  ngOnInit() {
    this.product.setName("test");
    this.product.setCode("1234");
  }

}
