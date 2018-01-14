import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailServerLogsComponent } from './email-server-logs.component';

describe('EmailServerLogsComponent', () => {
  let component: EmailServerLogsComponent;
  let fixture: ComponentFixture<EmailServerLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailServerLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailServerLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
