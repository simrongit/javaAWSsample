import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmaAllocationComponent } from './vma-allocation.component';

describe('VmaAllocationComponent', () => {
  let component: VmaAllocationComponent;
  let fixture: ComponentFixture<VmaAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmaAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmaAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
