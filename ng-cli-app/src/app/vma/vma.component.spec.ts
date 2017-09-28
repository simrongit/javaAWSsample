import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmaComponent } from './vma.component';

describe('VmaComponent', () => {
  let component: VmaComponent;
  let fixture: ComponentFixture<VmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
