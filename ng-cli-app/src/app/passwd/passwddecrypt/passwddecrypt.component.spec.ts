import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswddecryptComponent } from './passwddecrypt.component';

describe('PasswddecryptComponent', () => {
  let component: PasswddecryptComponent;
  let fixture: ComponentFixture<PasswddecryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswddecryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswddecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
