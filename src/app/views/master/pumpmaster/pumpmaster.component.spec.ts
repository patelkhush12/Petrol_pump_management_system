import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpmasterComponent } from './pumpmaster.component';

describe('PumpmasterComponent', () => {
  let component: PumpmasterComponent;
  let fixture: ComponentFixture<PumpmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumpmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
