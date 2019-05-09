import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent implements OnInit {

  @Input("comment") comment: Comment;
  private comments: Array<Comment>;
  private errorMsg: string;

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    if (this.checkInputs()) {
      this.getComments();
    }
  }

  private checkInputs() : boolean {
    if (this.comment == null) {
      throw new Error("Attribute 'comment' is required");
    }
    return true;
  }

  private getComments() {
    return new Promise((resolve, reject) => {
      this.commentService.getCommentsFromComment(this.comment.id).subscribe(fComments => {
        try {
          this.errorMsg = "";
          this.comments = fComments;
          
          console.log("Received response about comments from comment ", this.comment.id);
          console.log(fComments);
          resolve();
        }
        catch {
          this.errorMsg = "Something went wrong while retrieving Comments, please try again";
          reject();
        }
      })

    });
  }

}
