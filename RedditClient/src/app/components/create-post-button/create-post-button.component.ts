import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post-button',
  templateUrl: './create-post-button.component.html',
  styleUrls: ['./create-post-button.component.scss']
})
export class CreatePostButtonComponent implements OnInit {

  @Input('subredditName') subredditName: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  private navigateToForm() {
    this.router.navigate(['/subreddits/' + this.subredditName + '/submit']);
  }
}
