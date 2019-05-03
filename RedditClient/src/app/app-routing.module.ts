import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { PostComponent } from './components/post/post.component';
import { CreateSubredditFormComponent } from './components/create-subreddit-form/create-subreddit-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'redditors/:username/timeline', component: TimelineComponent },
  { path: 'subreddits/:subredditName', component: SubredditComponent},
  { path: 'subreddits/:subredditName/posts/:postId/:postTitle', component: PostComponent},
  { path: 'redditor/subreddits/submit', component: CreateSubredditFormComponent},
  { path: 'search/:searchTerm', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
