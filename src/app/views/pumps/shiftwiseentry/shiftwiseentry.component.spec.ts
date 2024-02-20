import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftwiseentryComponent } from './shiftwiseentry.component';

describe('ShiftwiseentryComponent', () => {
  let component: ShiftwiseentryComponent;
  let fixture: ComponentFixture<ShiftwiseentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftwiseentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftwiseentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
