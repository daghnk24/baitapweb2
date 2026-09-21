import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { Homework } from './homework/homework';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule.forRoot([])],
      declarations: [App, Homework, ServiceProductImageEvent, ProductListCallServiceComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});