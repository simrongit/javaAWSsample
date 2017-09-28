import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GgdComponent } from './ggd.component';

describe('GgdComponent', () => {
  let component: GgdComponent;
  let fixture: ComponentFixture<GgdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
