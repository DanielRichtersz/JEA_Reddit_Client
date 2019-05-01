import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PostComponent } from './components/post/post.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { SubredditListComponent } from './components/subreddit-list/subreddit-list.component';
import { SubredditDetailsComponent } from './components/subreddit-details/subreddit-details.component';
import { NavigateBackButtonComponent } from './components/navigate-back-button/navigate-back-button.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { LogoutComponent } from './components/logout/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimelineComponent,
    PostComponent,
    SubredditComponent,
    SubredditListComponent,
    SubredditDetailsComponent,
    NavigateBackButtonComponent,
    PostDetailsComponent,
    PostListComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }