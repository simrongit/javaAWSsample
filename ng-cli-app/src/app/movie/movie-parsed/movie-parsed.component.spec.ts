import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieParsedComponent } from './movie-parsed.component';

describe('MovieParsedComponent', () => {
  let component: MovieParsedComponent;
  let fixture: ComponentFixture<MovieParsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieParsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieParsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
