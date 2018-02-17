import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from '../product.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) { }


  ngOnInit() {
    // const id = this._route.snapshot.paramMap.get( 'id');
    const id = this._route.snapshot.params['id'];
    this._productService.getProduct(id);

  }

  onBack(): void {
    this._router.navigate['/products'];
  }

}
