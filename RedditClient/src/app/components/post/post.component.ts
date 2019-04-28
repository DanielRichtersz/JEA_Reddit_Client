import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private post: Post;

  private errorMsg: String;

  constructor(
    private route: ActivatedRoute, 
    private postService: PostService) { }

  ngOnInit() {
    this.getPost();
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
        }
        catch {

        }
      })
    })
  }

}
