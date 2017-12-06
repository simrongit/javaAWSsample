import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerUpStatusComponent } from './server-up-status.component';

describe('ServerUpStatusComponent', () => {
  let component: ServerUpStatusComponent;
  let fixture: ComponentFixture<ServerUpStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerUpStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerUpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
