import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private _productService :ProductService) { }

  product = new Product();



  ngOnInit() {
    this.product.setName("test name bla bla ");
    // this.product.setCode("1234");
    // this.product.setReleaseDate("assssd");
    // this.product.setDescription("testDescription");
    // this.product.setPrice(123);
    // this.product.setStarRating(1);
    // this.product.setImageUrl("test url");
  }

  postProdut(form: NgForm) {
    // console.log(this.product);
    this._productService.postProdut(this.product);
  }

}
