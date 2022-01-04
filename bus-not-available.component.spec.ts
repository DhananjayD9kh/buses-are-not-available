import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusNotAvailableComponent } from './bus-not-available.component';

describe('BusNotAvailableComponent', () => {
  let component: BusNotAvailableComponent;
  let fixture: ComponentFixture<BusNotAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusNotAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
