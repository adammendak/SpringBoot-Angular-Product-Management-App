import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  private errorMessage: string;

  constructor(private _toastr: ToastrService) { }

  ngOnInit() {
    this._toastr.error("Error ! ");

  }

}
