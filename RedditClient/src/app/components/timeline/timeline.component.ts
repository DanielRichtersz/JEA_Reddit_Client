import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimelineService } from 'src/app/services/timeline/timeline.service';
import { Subreddit } from 'src/app/models/Subreddit';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  private subreddits: Array<Subreddit>;
  private errorMsg: String;
  private username: string;

  constructor(
    private route: ActivatedRoute,
    private timelineService: TimelineService,
  ) {

  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.getFollowedSubreddits();
  }

  private getFollowedSubreddits() {
    this.timelineService.getFollowedSubreddits(this.username).subscribe(fSubreddits => {
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
