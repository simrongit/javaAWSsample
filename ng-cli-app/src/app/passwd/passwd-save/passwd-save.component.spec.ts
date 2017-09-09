import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdSaveComponent } from './passwd-save.component';

describe('PasswdSaveComponent', () => {
  let component: PasswdSaveComponent;
  let fixture: ComponentFixture<PasswdSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswdSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswdSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
