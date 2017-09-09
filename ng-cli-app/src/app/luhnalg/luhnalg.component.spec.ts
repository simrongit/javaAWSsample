import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuhnalgComponent } from './luhnalg.component';

describe('LuhnalgComponent', () => {
  let component: LuhnalgComponent;
  let fixture: ComponentFixture<LuhnalgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuhnalgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuhnalgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
