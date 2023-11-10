import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiaComponent } from './alergia.component';

describe('AlergiaComponent', () => {
  let component: AlergiaComponent;
  let fixture: ComponentFixture<AlergiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlergiaComponent]
    });
    fixture = TestBed.createComponent(AlergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
