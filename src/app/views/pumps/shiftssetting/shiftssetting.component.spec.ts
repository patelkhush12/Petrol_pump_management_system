import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftssettingComponent } from './shiftssetting.component';

describe('ShiftssettingComponent', () => {
  let component: ShiftssettingComponent;
  let fixture: ComponentFixture<ShiftssettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftssettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftssettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
