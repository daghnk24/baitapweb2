import { Component } from '@angular/core';
import { Catalog, CatalogService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})
export class ProductListCallServiceComponent {
  catalogs: Catalog[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.catalogs = this.catalogService.getCategories();
  }
}