import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-comment-form',
  templateUrl: './create-comment-form.component.html',
  styleUrls: ['./create-comment-form.component.scss']
})
export class CreateCommentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  private submit(commentContent: string) {
    console.log("TODO: Get username from socket");
    /*let subredditName = this.route.snapshot.paramMap.get('subredditName');

    this.postService.createPost(postTitle, postContent, subredditName, "username1").subscribe(fPost => {
      try {
        this.errorMsg = '';
        console.log("Received response about created post: ");
        console.log(fPost);
        console.log("TODO: Create error handling from response");
        this.post = fPost;
        console.log('This.post');
        console.log(this.post);
        if (this.post != null) {
          console.log('This.post is not null, router is');
          console.log(this.router);
          this.router.navigate(['/subreddits', subredditName, 'posts', this.post.id, this.post.title]);
        }
        else {
          this.errorMsg = "Something went wrong while creating post, please try again";
        }
      }
      catch {
        this.errorMsg = "Something went wrong while creating post, please try again";
      }
    })*/
  }
}
