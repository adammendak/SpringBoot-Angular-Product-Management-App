import {Injectable} from "@angular/core";
import {IProduct, Product} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {NgForm} from "@angular/forms";
import {RequestOptions, Headers, Response, Request, Http} from "@angular/http";
// import 'rxjs/add/operator/throw';

@Injectable()
export class ProductService {

private url = "http://localhost:8080/api/product";

  constructor(private _http: HttpClient, private http: Http) {
  }

  getProducts() :Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.url)
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  postProdut(product : Product) :Observable<any>{
    let body = JSON.stringify(product);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({headers: headers});

    console.log("product from service : ", product);
    return this.http.post(this.url, body, options).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.fields || { };
  }

  private handleError(err :any) {
    console.log(err.message);
    return Observable.throw(err.statusText);
  }
}
