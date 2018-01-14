import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmFlowCreatorComponent } from './bpm-flow-creator.component';

describe('BpmFlowCreatorComponent', () => {
  let component: BpmFlowCreatorComponent;
  let fixture: ComponentFixture<BpmFlowCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmFlowCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmFlowCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
