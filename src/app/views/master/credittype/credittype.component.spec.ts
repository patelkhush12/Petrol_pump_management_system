import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredittypeComponent } from './credittype.component';

describe('CredittypeComponent', () => {
  let component: CredittypeComponent;
  let fixture: ComponentFixture<CredittypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredittypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredittypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
