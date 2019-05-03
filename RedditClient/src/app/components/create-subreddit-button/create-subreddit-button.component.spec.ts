import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubredditButtonComponent } from './create-subreddit-button.component';

describe('CreateSubredditButtonComponent', () => {
  let component: CreateSubredditButtonComponent;
  let fixture: ComponentFixture<CreateSubredditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubredditButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubredditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
