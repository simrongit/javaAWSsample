import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmaLoginComponent } from './vma-login.component';

describe('VmaLoginComponent', () => {
  let component: VmaLoginComponent;
  let fixture: ComponentFixture<VmaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
