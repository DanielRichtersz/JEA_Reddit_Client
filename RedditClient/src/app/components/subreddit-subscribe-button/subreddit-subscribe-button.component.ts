import { Component, OnInit, Input } from '@angular/core';
import { SubredditService } from 'src/app/services/subreddit/subreddit.service';

@Component({
  selector: 'app-subreddit-subscribe-button',
  templateUrl: './subreddit-subscribe-button.component.html',
  styleUrls: ['./subreddit-subscribe-button.component.scss']
})
export class SubredditSubscribeButtonComponent implements OnInit {

  private subscribed: boolean;

  @Input("username") private username: string;
  @Input("subredditName") private subredditName: string;

  constructor(private subredditService: SubredditService) { }

  ngOnInit() {
    this.subscribed = false;
    this.getSubscribed();
  }

  private checkInput() {
    if (this.username == null) {
      throw new Error("Attribute 'username' is required");
    }
    if (this.subredditName == null) {
      throw new Error("Attribute 'subredditName' is required");
    }
  }

  private subscribe() {
    this.subredditService.subscribeToSubreddit(this.subredditName, this.username).subscribe(fSubscribed => {
      this.subscribed = fSubscribed;
    })
  }

  private getSubscribed() {
    this.subredditService.getSubscribedToSubreddit(this.subredditName, this.username).subscribe(fSubscribed => {
      this.subscribed = fSubscribed;
    })
  }
}
