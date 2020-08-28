import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjudCampoComponent } from './pjud-campo.component';

describe('PjudCampoComponent', () => {
  let component: PjudCampoComponent;
  let fixture: ComponentFixture<PjudCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjudCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjudCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
