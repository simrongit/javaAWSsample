import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmaAlocLockedbyouComponent } from './vma-aloc-lockedbyou.component';

describe('VmaAlocLockedbyouComponent', () => {
  let component: VmaAlocLockedbyouComponent;
  let fixture: ComponentFixture<VmaAlocLockedbyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmaAlocLockedbyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmaAlocLockedbyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
