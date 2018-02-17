import {Injectable} from "@angular/core";
import {IProduct, Product} from "./product";
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {RequestOptions, Headers, Response, Request, Http} from "@angular/http";

@Injectable()
export class ProductService {

private url = "http://localhost:8080/api/products";

  constructor(private _http: HttpClient, private http: Http) {
  }

  getProduct(id: string): Observable<IProduct> {
    let url = this.url + "/" + id;
    console.log("in product service, fetching for id " + id);
    return this.http.get(url)
      .map((res: Response) => {
        console.log("Product fron back end: " + JSON.stringify(res));
        return <IProduct>res.json()
      });
  }


  getProducts(): Observable<IProduct[]> {

    return this._http.get<IProduct[]>(this.url)
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  postProdut(product: Product): Observable<any>{
    let body = JSON.stringify(product);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({headers: headers});


    return this.http.post(this.url, body, options).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("product from service : ", body);
    return body.fields || { };
  }

  private handleError(err: any) {
    console.log(err.message);
    return Observable.throw(err.statusText);
  }
}
