import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceLogAanalyzerComponent } from './performance-log-aanalyzer.component';

describe('PerformanceLogAanalyzerComponent', () => {
  let component: PerformanceLogAanalyzerComponent;
  let fixture: ComponentFixture<PerformanceLogAanalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceLogAanalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceLogAanalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
