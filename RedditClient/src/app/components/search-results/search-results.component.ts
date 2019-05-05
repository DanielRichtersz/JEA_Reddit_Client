import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search/search.service';
import { Subreddit } from 'src/app/models/Subreddit';
import { Post } from 'src/app/models/Post';
import { reject } from 'q';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private searchTerm: string;
  private errorMsg: string;
  private foundSubreddits: Array<Subreddit>;
  private foundPosts: Array<Post>;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
      this.search();
    });
  }

  private search() {
    this.searchForSubreddits();
    this.searchForPosts();
  }

  private searchForSubreddits() {
    if (this.searchTermExists()) {
      this.foundSubreddits = null;
      try {
        return new Promise((resolve, reject) => {
          this.searchService.searchForSubreddits(this.searchTerm).subscribe(fSubreddits => {
            this.foundSubreddits = fSubreddits;
            resolve();
          });
        });
      }
      catch {
        reject();
      }
    }
  }

  private searchForPosts() {
    if (this.searchTermExists()) {
      this.foundPosts = null;
      try {
        return new Promise((resolve, reject) => {
          this.searchService.searchForPosts(this.searchTerm).subscribe(fPosts => {
            this.foundPosts = fPosts;
            resolve();
          })
        });

      }
      catch {
        reject();
      }
    }
  }

  private searchTermExists(): boolean {
    if (!this.searchTerm) {
      this.errorMsg = "Please enter a searchterm to search Reddit";
      return false;
    }
    return true;
  }
}
