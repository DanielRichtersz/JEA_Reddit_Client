import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubredditFormComponent } from './create-subreddit-form.component';

describe('CreateSubredditFormComponent', () => {
  let component: CreateSubredditFormComponent;
  let fixture: ComponentFixture<CreateSubredditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubredditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubredditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
