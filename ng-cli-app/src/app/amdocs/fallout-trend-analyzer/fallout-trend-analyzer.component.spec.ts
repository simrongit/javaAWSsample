import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalloutTrendAnalyzerComponent } from './fallout-trend-analyzer.component';

describe('FalloutTrendAnalyzerComponent', () => {
  let component: FalloutTrendAnalyzerComponent;
  let fixture: ComponentFixture<FalloutTrendAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalloutTrendAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalloutTrendAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
