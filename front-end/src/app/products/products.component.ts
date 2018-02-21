import { Component, OnInit, Inject } from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";
import {ActivatedRoute} from '@angular/router';
import {TOASTR_TOKEN, Toastr} from "../shared";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle: string = "Product List";
  showImage: boolean = false;
  _listFilter: string;
  errorMessage: string;

  // get listFilter() :string {
  //   return this._listFilter;
  // }
  // set listFilter(value :string) {
  //   this.listFilter = value;
  //   this.filteredProducts = this.listFilter ? this.performFiler(this.listFilter) : this.products;
  // }

  filteredProducts: IProduct[];
  products: IProduct[] = [];


  imageWidth: number = 500;
  imageMargin: number = 2;

  constructor(private _productService: ProductService,
              @Inject(TOASTR_TOKEN) private _toastr: Toastr,
              private _route: ActivatedRoute) {
    this._listFilter = 'cart';
  }

  ngOnInit() {
    // this._productService.getProducts()
    //   .subscribe(products => {
    //   this.products = products,
    //     this.filteredProducts = this.products},
    //     error => this.errorMessage = <any>error);

    // Now doing this by resolver
    this.products = this._route.snapshot.data['products'];
    this.filteredProducts = this._route.snapshot.data['products'];

    this._toastr.info("fetching all products");
  }

  toggleImg(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }

  // performFiler(filterBy :string) : IProduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: IProduct) => {
  //     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
  //   })
  // }

}
