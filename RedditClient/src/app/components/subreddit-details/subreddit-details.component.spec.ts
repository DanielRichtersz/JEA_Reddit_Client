import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditDetailsComponent } from './subreddit-details.component';

describe('SubredditDetailsComponent', () => {
  let component: SubredditDetailsComponent;
  let fixture: ComponentFixture<SubredditDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
