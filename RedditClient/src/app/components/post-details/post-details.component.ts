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
  @Input('postId') private postId: string;

  private subredditName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //Not used?
    this.subredditName = this.route.snapshot.paramMap.get('subredditName');;
    this.postTitle = this.postTitle.split(' ').join('_');
  }

}
