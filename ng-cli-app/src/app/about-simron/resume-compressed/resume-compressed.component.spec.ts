import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCompressedComponent } from './resume-compressed.component';

describe('ResumeCompressedComponent', () => {
  let component: ResumeCompressedComponent;
  let fixture: ComponentFixture<ResumeCompressedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCompressedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCompressedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
