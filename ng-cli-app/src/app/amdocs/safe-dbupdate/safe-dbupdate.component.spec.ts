import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeDBUpdateComponent } from './safe-dbupdate.component';

describe('SafeDBUpdateComponent', () => {
  let component: SafeDBUpdateComponent;
  let fixture: ComponentFixture<SafeDBUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeDBUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeDBUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
