import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSimronComponent } from './about-simron.component';

describe('AboutSimronComponent', () => {
  let component: AboutSimronComponent;
  let fixture: ComponentFixture<AboutSimronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSimronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSimronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
