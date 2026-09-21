import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';

export class Catalog {
  Cateid: string = '';
  CateName: string = '';
  Products: any[] = [];
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Iphone 12', price: 2000, image: 'https://didongmoi.vn/wp-content/uploads/2025/07/1625885054_dien-thoai-iphone-12-128gb-cu-trang.jpg' },
    { id: 2, name: 'Iphone 18', price: 3000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSny6-xR1EKaspxb6jQrD98D6jcNX1eB7o6ulnDEDC74g&s=1000' },
    { id: 3, name: 'Iphone Duo', price: 4000, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThpiUqE5_JsblOnkLE15PoUXGxf4RzWbOSYjbRutQXWjp56ug20l8EYy6AF4vifFpgbw_9sPDQaruW_XRbGVzSFFDZZmN61xaG5BV1hj5C&usqp=CAc' },
    { id: 4, name: 'Macbook Air M4', price: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajjZ_VGCbp_apOCzf71WmqlvE5b88UjrKC2_2O4MIvQ&s=1000' },
    { id: 5, name: 'Iphone 16', price: 6000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aUjs9_xh63MB_kDXmlqhYnhyDdbxSepUrashm6rJTg&s=1000' },
  ];

  productsImage = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-N_g7on8H4HQq50njEKwAmNeW0oqhpotCgA42IZdkw&s' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://product.hstatic.net/1000288770/product/nuoc_ngot_pepsi_cola_lon_330ml_5d1df64d846f4f93aa666c723cea177d_master.jpg' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://cdn.go-vietnam.vn/sale-products/02069924-1.png?v=6' },
  ];

  constructor() {}

  getProductList(): Product[] {
    return this.products;
  }

  filterProducts(minPrice: number, maxPrice: number): Product[] {
    return this.products.filter(product => product.price >= minPrice && product.price <= maxPrice);
  }

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id);
  }
}

@Injectable({ providedIn: 'root' })
export class CatalogService {
  datas: Catalog[] = [
    {
      Cateid: 'cate1',
      CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-N_g7on8H4HQq50njEKwAmNeW0oqhpotCgA42IZdkw&s' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://product.hstatic.net/1000288770/product/nuoc_ngot_pepsi_cola_lon_330ml_5d1df64d846f4f93aa666c723cea177d_master.jpg' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://cdn.go-vietnam.vn/sale-products/02069924-1.png?v=6' },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        { ProductId: 'p4', ProductName: 'Heleiken', Price: 500, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyos1pJjFm5g4YV9_8RWe9Fi9pDZbH4fyVOAaHmmltLQ&s=10' },
        { ProductId: 'p5', ProductName: '333', Price: 400, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwx9IDl_AmZqeVlnKRLex70GvAoqhhYtsw8RYbf5I_uA&s=10' },
        { ProductId: 'p6', ProductName: 'Sai Gon', Price: 600, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVjCmxY9zZEZ7Q-koZg7PWsvnb9H85dy-6n6EbLKMgw&s' },
      ],
    },
  ];

  constructor() {}

  getCategories(): Catalog[] {
    return this.datas;
  }
}