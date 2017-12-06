import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusReportingComponent } from './status-reporting.component';

describe('StatusReportingComponent', () => {
  let component: StatusReportingComponent;
  let fixture: ComponentFixture<StatusReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
