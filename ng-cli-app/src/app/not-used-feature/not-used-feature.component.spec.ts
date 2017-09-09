import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotUsedFeatureComponent } from './not-used-feature.component';

describe('NotUsedFeatureComponent', () => {
  let component: NotUsedFeatureComponent;
  let fixture: ComponentFixture<NotUsedFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotUsedFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotUsedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
