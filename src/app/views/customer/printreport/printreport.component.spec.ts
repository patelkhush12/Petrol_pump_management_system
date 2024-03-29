import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintreportComponent } from './printreport.component';

describe('PrintreportComponent', () => {
  let component: PrintreportComponent;
  let fixture: ComponentFixture<PrintreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
