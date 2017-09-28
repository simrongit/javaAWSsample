import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmaAlocAdminComponent } from './vma-aloc-admin.component';

describe('VmaAlocAdminComponent', () => {
  let component: VmaAlocAdminComponent;
  let fixture: ComponentFixture<VmaAlocAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmaAlocAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmaAlocAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
