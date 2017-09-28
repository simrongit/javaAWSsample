import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmaAlocLockedComponent } from './vma-aloc-locked.component';

describe('VmaAlocLockedComponent', () => {
  let component: VmaAlocLockedComponent;
  let fixture: ComponentFixture<VmaAlocLockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmaAlocLockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmaAlocLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
