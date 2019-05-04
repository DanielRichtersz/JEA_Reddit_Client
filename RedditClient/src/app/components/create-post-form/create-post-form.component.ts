import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/models/Post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss']
})
export class CreatePostFormComponent implements OnInit {

  private errorMsg: string;
  private post: Post;

  constructor(
    private postService: PostService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  private submit(postTitle: string, postContent: string) {
    console.log("TODO: Get username from socket");
    let subredditName = this.route.snapshot.paramMap.get('subredditName');

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
    })
  }

}
