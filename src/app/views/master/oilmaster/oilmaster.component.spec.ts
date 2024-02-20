import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilmasterComponent } from './oilmaster.component';

describe('OilmasterComponent', () => {
  let component: OilmasterComponent;
  let fixture: ComponentFixture<OilmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OilmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
