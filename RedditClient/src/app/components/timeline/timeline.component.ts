import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimelineService } from 'src/app/services/timeline/timeline.service';
import { Subreddit } from 'src/app/models/Subreddit';
import { LoginService } from 'src/app/services/login/login.service';
import { Redditor } from 'src/app/models/Redditor';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  private subreddits: Array<Subreddit>;
  private errorMsg: String;
  private redditor: Redditor;

  constructor(
    private route: ActivatedRoute,
    private timelineService: TimelineService,
    private loginService: LoginService
  ) {

  }

  ngOnInit() {
    this.redditor = this.loginService.currentUserValue;
    
    this.getFollowedSubreddits();
  }

  private getFollowedSubreddits() {
    this.timelineService.getFollowedSubreddits(this.redditor.username).subscribe(fSubreddits => {
      try {
        this.errorMsg = "";
        this.subreddits = fSubreddits;

        console.log("Retrieved subreddits response: ");
        console.log(fSubreddits);
      }
      catch {
        this.errorMsg = "Something went wrong while loading followed subreddits, please try again";
      }
    })
  }

}
