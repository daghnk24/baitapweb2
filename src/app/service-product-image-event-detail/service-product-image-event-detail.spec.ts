import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ProductService } from '../services/product-service';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail';

describe('ServiceProductImageEventDetail', () => {
  let component: ServiceProductImageEventDetail;
  let fixture: ComponentFixture<ServiceProductImageEventDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProductImageEventDetail],
      providers: [
        ProductService,
        { provide: ActivatedRoute, useValue: { paramMap: of(new Map([['id', 'p1']])) } },
        { provide: Router, useValue: { navigate: () => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEventDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});