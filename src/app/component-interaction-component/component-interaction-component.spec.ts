import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentInteractionComponent } from './component-interaction-component';

describe('ComponentInteractionComponent', () => {
  let component: ComponentInteractionComponent;
  let fixture: ComponentFixture<ComponentInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentInteractionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentInteractionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
