import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogToHtmlComponent } from './log-to-html.component';

describe('LogToHtmlComponent', () => {
  let component: LogToHtmlComponent;
  let fixture: ComponentFixture<LogToHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogToHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogToHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
