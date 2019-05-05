import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subreddit-button',
  templateUrl: './create-subreddit-button.component.html',
  styleUrls: ['./create-subreddit-button.component.scss']
})
export class CreateSubredditButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private navigateToForm() {
    this.router.navigate(['/redditor/subreddits/submit']);
  }
}
