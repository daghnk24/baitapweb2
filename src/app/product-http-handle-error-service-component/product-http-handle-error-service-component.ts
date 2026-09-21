import { Component, signal, Injectable } from '@angular/core';
  import { Observable, of } from 'rxjs';

  @Injectable({ providedIn: 'root' })
  export class ProductHttpHandleErrorService {
    constructor() {}
    getProductList(): Observable<CustomerGroup[]> {
      // minimal stub implementation; replace with real HTTP call as needed
      return of([]);
    }
  }
  import { CustomerGroup } from '../classes/ICustomer';

@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  styleUrl: './product-http-handle-error-service-component.css',
  templateUrl: './product-http-handle-error-service-component.html',
})
export class ProductHttpHandleErrorServiceComponent {
  customerGroups = signal<CustomerGroup[]>([]);
  errMessage = signal('');
  constructor(private _service:ProductHttpHandleErrorService){ }
  ngOnInit():void{
    this._service.getProductList().subscribe({
      next:(data)=>{
        this.customerGroups.set(data);
      },
      error: (err) =>{
        let errorMessage = 'An unknown error occurred!';
  if (err.error instanceof ErrorEvent) {
    // 1. Client-side error (e.g., network issues, subscription errors)
    errorMessage = `Client-side error: ${err.error.message}`;
  } else {
    // 2. Server-side error (e.g., 404 Not Found, 500 Internal Server Error)
    errorMessage = `
        Error Status: ${err.status}
        Status Text: ${err.statusText}
        URL: ${err.url}
        Server Details: ${err.error ? JSON.stringify(err.error) : 'No details available'}
    `;
  }
  console.error(errorMessage);
  this.errMessage.set(errorMessage);
      }
    })
  }
}