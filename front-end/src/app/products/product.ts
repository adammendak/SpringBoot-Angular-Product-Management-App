export interface IProduct {
  id: number,
  name: string,
  code: string,
  releaseDate: string,
  description: string,
  price: number,
  starRating: number,
  imageUrl: string
}

export class Product implements  IProduct {

  id: number;
  name: string;
  code: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;

  calculateDiscount(percentage: number) : number {
    return this.price - (this.price * percentage/100);
  }

  setName(name: string) :void {
    this.name = name;
  }

  setCode(code: string) : void {
    this.code = code;
  }

  setReleaseDate(date: string ) :void {
    this.releaseDate = date;
  }
}
