import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";
import {ToastrServiceProxy} from "../shared/toastr.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle :string = "Product List";
  showImage :boolean = false;
  _listFilter :string;
  errorMessage :string;

  // get listFilter() :string {
  //   return this._listFilter;
  // }
  // set listFilter(value :string) {
  //   this.listFilter = value;
  //   this.filteredProducts = this.listFilter ? this.performFiler(this.listFilter) : this.products;
  // }

  filteredProducts: IProduct[];
  products :IProduct[] = [];


  imageWidth : number = 500;
  imageMargin : number = 2;

  constructor(private _productService :ProductService, private _toastr: ToastrServiceProxy) {
    this._listFilter = 'cart';
  }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(products =>{
      this.products = products,
        this.filteredProducts = this.products},
        error => this.errorMessage = <any>error);

    this._toastr.info("fetching all products");
  }

  toggleImg() : void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message :string) :void {
    this.pageTitle= "Product List: " + message;
  }

  // performFiler(filterBy :string) : IProduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: IProduct) => {
  //     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
  //   })
  // }

}
