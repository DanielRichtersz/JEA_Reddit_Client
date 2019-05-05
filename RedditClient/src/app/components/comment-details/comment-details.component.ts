import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit {

  @Input("comment") comment: Comment;

  constructor() { }

  ngOnInit() {
    this.checkInputs();
  }

  private checkInputs() {
    if (this.comment == null) {
      throw new Error("Attribute 'comment' is required");
    }
  }

}
