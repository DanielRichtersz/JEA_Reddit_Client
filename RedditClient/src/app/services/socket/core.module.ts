import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubredditComponent } from 'src/app/components/subreddit/subreddit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SubredditComponent],
  exports: [SubredditComponent]
})
export class CoreModule { }
