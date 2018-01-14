import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmaAlocAvailableComponent } from './vma-aloc-available.component';

describe('VmaAlocAvailableComponent', () => {
  let component: VmaAlocAvailableComponent;
  let fixture: ComponentFixture<VmaAlocAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmaAlocAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmaAlocAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
