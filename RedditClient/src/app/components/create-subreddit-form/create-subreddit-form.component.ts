import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubredditService } from 'src/app/services/subreddit/subreddit.service';
import { Subreddit } from 'src/app/models/Subreddit';

@Component({
  selector: 'app-create-subreddit-form',
  templateUrl: './create-subreddit-form.component.html',
  styleUrls: ['./create-subreddit-form.component.scss']
})
export class CreateSubredditFormComponent implements OnInit {

  private errorMsg: string;
  private subreddit: Subreddit;

  constructor(
    private router: Router,
    private subredditService: SubredditService,
  ) { }

  ngOnInit() {
  }

  private submit(subredditName: string, subredditDescription: string) {
    if (this.checkInput(subredditName, subredditDescription)) {
      this.createSubreddit(subredditName, subredditDescription);
    }
  }

  private checkInput(subredditName: string, subredditDescription: string) : boolean {
    if (/\s/.test(subredditName)) {
      // It has any kind of whitespace
      this.errorMsg = 'The subreddit name cannot contain spaces as it will function as the url link.'
      return false;
    }
    if (/\+/.test(subredditName)) {
      this.errorMsg = 'The subreddit name cannot contain \+ characters.';
      return false;
    }
    if (subredditName.length == 0 || subredditDescription.length == 0) {
      this.errorMsg = 'Please fill in all fields.';
      return false;
    }
    return true;
  }

  private createSubreddit(subredditName: string, subredditDescription: string) {
    console.log("TODO: Get username from socket");
    this.subredditService.createSubreddit(subredditName, subredditDescription, "username1").subscribe(fSubreddit => {
      try {
        this.errorMsg = '';
        console.log("Received response about created subreddit: ");
        console.log(fSubreddit);
        console.log("TODO: Create error handling from response");
        this.subreddit = fSubreddit;

        if (this.subreddit != null) {
          this.router.navigate(['/subreddits/' + this.subreddit.name]);
        }
        else {
          this.errorMsg = "Something went wrong while creating subreddit, please try again";
        }
      }
      catch {
        this.errorMsg = "Something went wrong while creating subreddit, please try again";
      }
    })
  }

}
