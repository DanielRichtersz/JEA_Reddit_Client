import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Postable } from 'src/app/models/Postable';

@Component({
  selector: 'app-closable-create-comment-form',
  templateUrl: './closable-create-comment-form.component.html',
  styleUrls: ['./closable-create-comment-form.component.scss']
})
export class ClosableCreateCommentFormComponent implements OnInit {

  @Input("postable") postable: Postable;
  @Input("show") show: boolean;
  @Output("closeEmitter") closeEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.checkInputs();
  }

  private checkInputs() {
    if (this.show == null) {
      throw new Error("Attribute 'show' is required");
    }
    if (this.closeEmitter == null) {
      throw new Error("Attribute 'close' is required");
    }
  }

  private close() {
    this.closeEmitter.emit();
  }
}
