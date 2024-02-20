import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilstockComponent } from './oilstock.component';

describe('OilstockComponent', () => {
  let component: OilstockComponent;
  let fixture: ComponentFixture<OilstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilstockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OilstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
