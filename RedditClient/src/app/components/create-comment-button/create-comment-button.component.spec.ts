import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentButtonComponent } from './create-comment-button.component';

describe('CreateCommentButtonComponent', () => {
  let component: CreateCommentButtonComponent;
  let fixture: ComponentFixture<CreateCommentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
