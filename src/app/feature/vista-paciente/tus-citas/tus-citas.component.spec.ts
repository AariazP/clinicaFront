import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusCitasComponent } from './tus-citas.component';

describe('TusCitasComponent', () => {
  let component: TusCitasComponent;
  let fixture: ComponentFixture<TusCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TusCitasComponent]
    });
    fixture = TestBed.createComponent(TusCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
