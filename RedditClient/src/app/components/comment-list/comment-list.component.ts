import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input("pComments") comments: Array<Comment>;

  constructor() { }

  ngOnInit() {
    this.checkInputs();
  }

  private checkInputs() {
    if (this.comments == null) {
      throw new Error("Attribute 'comments' is required");
    }
  }

}
