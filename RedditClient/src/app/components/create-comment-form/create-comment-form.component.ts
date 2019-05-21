import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { Postable } from 'src/app/models/Postable';
import { LoginService } from 'src/app/services/login/login.service';
import { Redditor } from 'src/app/models/Redditor';

@Component({
  selector: 'app-create-comment-form',
  templateUrl: './create-comment-form.component.html',
  styleUrls: ['./create-comment-form.component.scss']
})
export class CreateCommentFormComponent implements OnInit {

  private errorMsg: string;
  private comment: Comment;
  private redditor: Redditor;

  @Input('parentPostable') private reactionTo: Postable;
  //TODO: Username from socket

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.redditor = this.loginService.currentUserValue;
  }

  private submit(commentContent: string) {
    console.log("TODO: Get username from socket");
    let subredditName = this.route.snapshot.paramMap.get('subredditName');
    let postId = this.route.snapshot.paramMap.get('postId');
    let postTitle = this.route.snapshot.paramMap.get('postTitle');

    if (!postId || !postTitle || !subredditName || !this.redditor.username) {
      this.errorMsg = 'Something went wrong while loading the page. Please refresh the page and try again';
    }
    
    this.commentService.createComment(subredditName, this.redditor.username, commentContent, this.reactionTo.id.toString()).subscribe(fComment => {
      try {
        this.errorMsg = '';
        console.log("Received response about created comment: ");
        console.log(fComment);
        console.log("TODO: Create error handling from response");
        this.comment = fComment;
        if (this.comment != null) {
          //this.router.navigate(['/subreddits', subredditName, 'posts', postId, postTitle]);
          window.location.reload();
        }
        else {
          this.errorMsg = "Something went wrong while creating comment, please try again 1";
        }
      }
      catch {
        this.errorMsg = "Something went wrong while creating comment, please try again 2";
      }
    })
  }
}
