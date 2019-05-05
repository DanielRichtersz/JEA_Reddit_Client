import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosableCreateCommentFormComponent } from './closable-create-comment-form.component';

describe('ClosableCreateCommentFormComponent', () => {
  let component: ClosableCreateCommentFormComponent;
  let fixture: ComponentFixture<ClosableCreateCommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosableCreateCommentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosableCreateCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
