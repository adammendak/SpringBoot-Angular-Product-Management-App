import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle :string = "Product Detail";
  product: IProduct;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
  }

}
