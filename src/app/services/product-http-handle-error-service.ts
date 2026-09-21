import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerGroup } from '../classes/ICustomer';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpHandleErrorService {
  private _url: string = '/assets/data/customer.js';
  constructor(private _http:HttpClient){}
  getProductList():Observable<CustomerGroup[]>{
    return this._http.get<CustomerGroup[]>(this._url)
        .pipe(
            retry(3),
            catchError(this.handleError)
        )
  }
  handleError(error:HttpErrorResponse)
  {
    return throwError(() => error);
  }

}