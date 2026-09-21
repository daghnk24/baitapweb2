import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Catalog, CatalogService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  styleUrl: './service-product-image-event.css',
  templateUrl: './service-product-image-event.html',
})
export class ServiceProductImageEvent {
  catalogs: Catalog[] = [];

  constructor(private catalogService: CatalogService, private router: Router) {
    this.catalogs = this.catalogService.getCategories();
  }

  viewDetail(product: any) {
    this.router.navigate(['service-product-image-event', product.ProductId]);
  }
}