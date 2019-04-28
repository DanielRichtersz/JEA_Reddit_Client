import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input('postTitle') private postTitle: string;
  private subredditName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subredditName = this.route.snapshot.paramMap.get('subredditname');;
  }

}
