import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmaAboutComponent } from './vma-about.component';

describe('VmaAboutComponent', () => {
  let component: VmaAboutComponent;
  let fixture: ComponentFixture<VmaAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmaAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
