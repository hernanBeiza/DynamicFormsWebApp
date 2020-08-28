import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjudPestanaComponent } from './pjud-pestana.component';

describe('PjudPestanaComponent', () => {
  let component: PjudPestanaComponent;
  let fixture: ComponentFixture<PjudPestanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjudPestanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjudPestanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
