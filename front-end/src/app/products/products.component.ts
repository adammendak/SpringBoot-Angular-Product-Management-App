import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle :string = "Product List";
  showImage :boolean = false;
  _listFilter :string;

  // get listFilter() :string {
  //   return this._listFilter;
  // }
  // set listFilter(value :string) {
  //   this.listFilter = value;
  //   this.filteredProducts = this.listFilter ? this.performFiler(this.listFilter) : this.products;
  // }

  filteredProducts: IProduct[];
  products :IProduct[] =
    [{
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }];

  imageWidth : number = 500;
  imageMargin : number = 2;

  constructor() {
    this.filteredProducts = this.products;
    this._listFilter = 'cart';
  }

  ngOnInit() {
  }

  toggleImg() : void {
    this.showImage = !this.showImage;
  }

  // performFiler(filterBy :string) : IProduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: IProduct) => {
  //     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
  //   })
  // }

}
