import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';

@Injectable()
export class ProductService {

private url = "http://localhost:8080/api/product";

  constructor(private _http: HttpClient) {
  }

  getProducts() :Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.url)
      .do(data => console.log("All: " + JSON.stringify(data)));
      // .catch(this.handleError);
  }

  // private handleError(err :HttpErrorResponse) {
  //   console.log(err.message);
  //   return Observable.throw(err.message);
  // }
  private handleError(err :HttpErrorResponse) {
    return console.log(err.message);
  }
}
