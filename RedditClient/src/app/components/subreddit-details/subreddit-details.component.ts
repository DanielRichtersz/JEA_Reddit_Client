import { Component, OnInit, Input } from '@angular/core';
import { Subreddit } from '../../models/Subreddit';

@Component({
  selector: 'app-subreddit-details',
  templateUrl: './subreddit-details.component.html',
  styleUrls: ['./subreddit-details.component.scss']
})
export class SubredditDetailsComponent implements OnInit {

  @Input('parentData') private subreddit: Subreddit;

  constructor() { }

  ngOnInit() {
  }

}
