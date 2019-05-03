import { Component, OnInit, Input } from '@angular/core';
import { Subreddit } from 'src/app/models/Subreddit';

@Component({
  selector: 'app-subreddit-list',
  templateUrl: './subreddit-list.component.html',
  styleUrls: ['./subreddit-list.component.scss']
})
export class SubredditListComponent implements OnInit {

  @Input('parentData') private subreddits: Array<Subreddit>;

  constructor() { }

  ngOnInit() {
  }
}