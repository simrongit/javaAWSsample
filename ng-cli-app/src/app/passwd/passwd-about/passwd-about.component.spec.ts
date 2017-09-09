import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdAboutComponent } from './passwd-about.component';

describe('PasswdAboutComponent', () => {
  let component: PasswdAboutComponent;
  let fixture: ComponentFixture<PasswdAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswdAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswdAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
