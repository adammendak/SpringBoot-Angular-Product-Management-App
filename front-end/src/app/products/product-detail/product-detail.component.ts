import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from '../product.service';
import {Observable} from 'rxjs/Observable';
import {renderNode} from '@angular/core/src/view/util';
import {Subscription} from 'rxjs/Subscription';
import {IProduct} from '../product';

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
    let id = this._route.snapshot.params['id'];
    console.log("id is " + id)
    this._productService.getProduct(id).subscribe(data => this.product = data);
  }

  onBack() {
    this._router.navigate(['/products']).catch();
  }

}
