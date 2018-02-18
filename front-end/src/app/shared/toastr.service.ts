import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

declare let toastr: any;

@Injectable()
export class ToastrServiceProxy {

  constructor(private toastr: ToastrService) { }

  success(message: string, title?: string) :void {
    this.toastr.success(message, title)
  }

  info(message: string, title?: string) :void {
    this.toastr.info(message, title)
  }

  warning(message: string, title?: string) :void {
    this.toastr.warning(message, title)
  }

  error(message: string, title?: string) :void {
    this.toastr.error(message, title)
  }



}
