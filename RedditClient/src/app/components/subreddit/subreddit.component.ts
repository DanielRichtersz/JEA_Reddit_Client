import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/Post';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SubredditService } from 'src/app/services/subreddit/subreddit.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.scss']
})
export class SubredditComponent implements OnInit {
 
  private baseUrl = 'api/';  // URL to web api

  private subredditName: string;
  private description: string;

  private errorMsg: String;
  private posts: Array<Post>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private subredditService: SubredditService) {
    
  }

  ngOnInit() {
    this.subredditName = this.route.snapshot.paramMap.get('subredditname');
    this.description = "TODO: Retrieve description by http request";

    console.log("Retrieving top 2 posts from " + this.subredditName);
    this.getSubredditTopPosts(0, 2);
  }

  private getSubredditTopPosts(from: number, to: number) {
    this.subredditService.getSubredditTopPosts(from, to, this.subredditName).subscribe(fPosts => {
      try {
        this.errorMsg = "";
        this.posts = fPosts;
        
        console.log("Retrieved posts from " + from + " to " + to);
        console.log(fPosts);
      }
      catch {
        this.errorMsg = "Something went wrong while loading posts, please try again";
      }
    })
  }
}