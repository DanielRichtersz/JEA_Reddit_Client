import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { LogoutComponent } from './components/logout/logout.component';
import { CreateSubredditButtonComponent } from './components/create-subreddit-button/create-subreddit-button.component';
import { CreateSubredditFormComponent } from './components/create-subreddit-form/create-subreddit-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CreatePostButtonComponent } from './components/create-post-button/create-post-button.component';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';
import { CreateCommentFormComponent } from './components/create-comment-form/create-comment-form.component';
import { CreateCommentButtonComponent } from './components/create-comment-button/create-comment-button.component';
import { ClosableComponentComponent } from './components/closable-component/closable-component.component';
import { ClosableCreateCommentFormComponent } from './components/closable-create-comment-form/closable-create-comment-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { SubredditSubscribeButtonComponent } from './components/subreddit-subscribe-button/subreddit-subscribe-button.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { LoginService } from './services/login/login.service';

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
    LogoutComponent,
    CreateSubredditButtonComponent,
    CreateSubredditFormComponent,
    SearchBarComponent,
    SearchResultsComponent,
    NavigationBarComponent,
    CreatePostButtonComponent,
    CreatePostFormComponent,
    CreateCommentFormComponent,
    CreateCommentButtonComponent,
    ClosableComponentComponent,
    ClosableCreateCommentFormComponent,
    CommentListComponent,
    CommentDetailsComponent,
    SubredditSubscribeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    CreateCommentFormComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }