import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSimComponent } from './post-sim.component';

describe('PostSimComponent', () => {
  let component: PostSimComponent;
  let fixture: ComponentFixture<PostSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
