import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { SubredditService } from 'src/app/services/subreddit/subreddit.service';
import { Subreddit } from 'src/app/models/Subreddit';
import { SocketService } from 'src/app/services/socket/socket.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.scss']
})
export class SubredditComponent implements OnInit {

  private subreddit: Subreddit;
  private posts: Array<Post>;
  private username: string;

  private errorMsg: String;

  constructor(
    private route: ActivatedRoute,
    private subredditService: SubredditService,
    private socketService: SocketService,
    private loginService: LoginService) {

  }

  ngOnInit() {
    console.log("TODO: Username from auth");
    let redditor = this.loginService.currentUserValue;
    if (redditor) {
      this.username = redditor.username;
    }
    else {
      this.loginService.logout();
    }
    
    this.getSubreddit().then(() => {
      this.getSubredditTopPosts(0, 2).then(() => {
        this.socketService.open();
        this.socketService.receive().subscribe((message) => {
          console.log("Received SOCKET message: " + JSON.parse(message.data));

          let post: Post;
          post = JSON.parse(message.data);
          this.posts.unshift(post);
        },
        (message) => {
          console.log("Error: ", message)
        })
      });
    });
  }

  private getSubreddit() {
    let urlSubredditName = this.route.snapshot.paramMap.get('subredditName');

    return new Promise((resolve, reject) => {
      this.subredditService.getSubreddit(urlSubredditName).subscribe(fSubreddit => {
        try {
          this.errorMsg = "";
          this.subreddit = fSubreddit;

          console.log("Received response about " + urlSubredditName);
          console.log(fSubreddit);
          resolve();
        }
        catch {
          this.errorMsg = "Something went wrong while retrieving the subreddit, please try again";
          reject("Something went wrong while retrieving subreddit, please try again");
        }
      })
    });
  }

  private getSubredditTopPosts(from: number, to: number) {
    return new Promise((resolve, reject) => {
      if (this.subreddit != null) {
        this.subredditService.getSubredditTopPosts(from, to, this.subreddit.name).subscribe(fPosts => {
          try {
            this.errorMsg = "";
            this.posts = fPosts;
  
            console.log("Retrieved posts from " + from + " to " + to);
            console.log(fPosts);
            resolve();
          }
          catch {
            this.errorMsg = "Something went wrong while loading posts, please try again";
            reject("Something went wrong while loading posts, please try again");
          }
        })
      }
    })
    
  }
}