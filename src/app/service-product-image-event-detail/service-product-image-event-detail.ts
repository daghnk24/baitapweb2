import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product-service';
import { CatalogService } from '../services/product-service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  styleUrl: './service-product-image-event-detail.css',
  templateUrl: './service-product-image-event-detail.html',
})
export class ServiceProductImageEventDetail {
  selectedProduct: any = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductService,
    private catalogService: CatalogService,
    private router: Router
  ) {
    this.activateRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id != null) {
        this.selectedProduct = this._fs.getProductDetail(id);

        if (!this.selectedProduct) {
          const categories = this.catalogService.getCategories();
          for (const catalog of categories) {
            const found = catalog.Products.find((p: any) => p.ProductId === id);
            if (found) {
              this.selectedProduct = found;
              break;
            }
          }
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}