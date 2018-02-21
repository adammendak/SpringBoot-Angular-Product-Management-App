import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {NgForm} from "@angular/forms";
import {Toastr, TOASTR_TOKEN} from "../../shared";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private _productService: ProductService,  @Inject(TOASTR_TOKEN) private _toastr: Toastr) { }

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
