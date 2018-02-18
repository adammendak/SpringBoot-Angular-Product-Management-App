import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {NgForm} from "@angular/forms";
import { ToastrServiceProxy} from "../../shared/toastr.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private _productService: ProductService, private _toastr: ToastrServiceProxy) { }

  product = new Product();

  ngOnInit() {
  }

  postProdut(form: NgForm) {
    this._productService.postProdut(this.product).subscribe(
      data => {
        console.log('success', data);
        this._toastr.success("added product")
      },
          err => console.log('error', err)
    )
  }

}
