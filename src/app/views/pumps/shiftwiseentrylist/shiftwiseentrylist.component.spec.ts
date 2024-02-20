import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftwiseentrylistComponent } from './shiftwiseentrylist.component';

describe('ShiftwiseentrylistComponent', () => {
  let component: ShiftwiseentrylistComponent;
  let fixture: ComponentFixture<ShiftwiseentrylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftwiseentrylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftwiseentrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
