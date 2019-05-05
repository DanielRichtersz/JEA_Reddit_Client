import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment/comment.service';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private post: Post;
  private comments: Array<Comment>;

  private errorMsg: String;

  constructor(
    private route: ActivatedRoute, 
    private postService: PostService,
    private commentService: CommentService) { }

  ngOnInit() {
    this.getPost().then(() => 
    this.getComments());
  }

  private getPost() {
    let urlPostTitle = this.route.snapshot.paramMap.get('postTitle');
    let urlPostId = this.route.snapshot.paramMap.get('postId');
    let urlSubredditName = this.route.snapshot.paramMap.get('subredditName');

    return new Promise((resolve, reject) => {
      this.postService.getPost(urlSubredditName, urlPostId, urlPostTitle).subscribe(fPost => {
        try {
          this.post = fPost;

          console.log("Received response about post " + urlPostTitle);
          console.log(fPost);
          resolve();
        }
        catch {
          this.errorMsg = 'Something went wrong while retrieving Post data, please try again';
          reject();
        }
      })
    })
  }

  private getComments() {
    
    let urlPostTitle = this.route.snapshot.paramMap.get('postTitle');
    let urlPostId = this.route.snapshot.paramMap.get('postId');
    let urlSubredditName = this.route.snapshot.paramMap.get('subredditName');

    return new Promise((resolve, reject) => {
      this.commentService.getCommentsFromPost(urlSubredditName, urlPostId, urlPostTitle).subscribe(fComments => {
        try {
          this.comments = fComments;

          console.log("Received response about comments from post ", urlPostTitle);
          console.log(fComments);
          resolve();
        }
        catch {
          this.errorMsg = "Something went wrong while retrieving Comments, please try again";
          reject();
        }
      })
    })
  }

}
