import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GgsComponent } from './ggs.component';

describe('GgsComponent', () => {
  let component: GgsComponent;
  let fixture: ComponentFixture<GgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
