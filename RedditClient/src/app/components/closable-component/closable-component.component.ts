  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-closable-component',
  templateUrl: './closable-component.component.html',
  styleUrls: ['./closable-component.component.scss']
})
export class ClosableComponentComponent implements OnInit {

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
