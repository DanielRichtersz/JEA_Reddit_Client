import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditSubscribeButtonComponent } from './subreddit-subscribe-button.component';

describe('SubredditSubscribeButtonComponent', () => {
  let component: SubredditSubscribeButtonComponent;
  let fixture: ComponentFixture<SubredditSubscribeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditSubscribeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditSubscribeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
