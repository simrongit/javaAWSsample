import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdRetrieveComponent } from './passwd-retrieve.component';

describe('PasswdRetrieveComponent', () => {
  let component: PasswdRetrieveComponent;
  let fixture: ComponentFixture<PasswdRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswdRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswdRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
