import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input('post') post: Post;

  private subredditName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.subredditName = this.route.snapshot.paramMap.get('subredditName');
  }

  private navigateToPostComponent() {
    this.router.navigate(['/subreddits', this.subredditName, 'posts', this.post.id, this.post.title]);
  }
}
