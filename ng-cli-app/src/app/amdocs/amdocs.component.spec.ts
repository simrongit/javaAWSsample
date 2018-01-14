import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdocsComponent } from './amdocs.component';

describe('AmdocsComponent', () => {
  let component: AmdocsComponent;
  let fixture: ComponentFixture<AmdocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmdocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
