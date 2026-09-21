import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/IProduct';

@Injectable({ providedIn: 'root' })
export class ProductHttpService {
    private _url: string = '/dataset/product-service.js';
    constructor(private httpClient: HttpClient) {}
    getProductList() :Observable<Product[]>
    {
        return this.httpClient.get<Product[]>(this._url);
    }
}