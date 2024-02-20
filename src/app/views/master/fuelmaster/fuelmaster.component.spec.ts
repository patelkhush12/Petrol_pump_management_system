import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelmasterComponent } from './fuelmaster.component';

describe('FuelmasterComponent', () => {
  let component: FuelmasterComponent;
  let fixture: ComponentFixture<FuelmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
