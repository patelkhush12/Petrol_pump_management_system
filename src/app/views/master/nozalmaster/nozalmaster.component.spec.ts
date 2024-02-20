import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NozalmasterComponent } from './nozalmaster.component';

describe('NozalmasterComponent', () => {
  let component: NozalmasterComponent;
  let fixture: ComponentFixture<NozalmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NozalmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NozalmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
