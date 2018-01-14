import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GgtComponent } from './ggt.component';

describe('GgtComponent', () => {
  let component: GgtComponent;
  let fixture: ComponentFixture<GgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
