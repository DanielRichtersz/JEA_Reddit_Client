import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosableComponentComponent } from './closable-component.component';

describe('ClosableComponentComponent', () => {
  let component: ClosableComponentComponent;
  let fixture: ComponentFixture<ClosableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
