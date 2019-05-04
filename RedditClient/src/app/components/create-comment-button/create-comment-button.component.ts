import { Component, OnInit } from '@angular/core';
import { CreateCommentFormComponent } from '../create-comment-form/create-comment-form.component';

@Component({
  selector: 'app-create-comment-button',
  templateUrl: './create-comment-button.component.html',
  styleUrls: ['./create-comment-button.component.scss']
})
export class CreateCommentButtonComponent implements OnInit {

  private showForm: boolean;

  constructor() { 
    this.showForm = false;
  }

  ngOnInit() {
  }

  private openForm() {
    console.log("Sesame open u");
      this.showForm = true;
  }

  public closeForm() {
    console.log("Closing");
    this.showForm = false;
  }

}
