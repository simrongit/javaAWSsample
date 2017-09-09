import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdgenComponent } from './passwdgen.component';

describe('PasswdgenComponent', () => {
  let component: PasswdgenComponent;
  let fixture: ComponentFixture<PasswdgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswdgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswdgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
