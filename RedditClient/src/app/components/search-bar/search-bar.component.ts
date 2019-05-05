import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { Subreddit } from 'src/app/models/Subreddit';
import { Post } from 'src/app/models/Post';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input('searchTerm') private searchTerm: string;

  private errorMsg: string;

  constructor(
    private router: Router,
    private searchService: SearchService,
  ) {

  }

  ngOnInit() {

  }

  private search() {
    if (!this.searchTerm) {
      this.errorMsg = "Please enter a searchterm to search Reddit";
      console.log(this.errorMsg);
    }
    else {
      this.router.navigate(['/search', this.searchTerm]);
    }
  }


  private searchInputOnKeydown(event) {
    if (event.key === "Enter") {
      this.search();
    }
  }
}
