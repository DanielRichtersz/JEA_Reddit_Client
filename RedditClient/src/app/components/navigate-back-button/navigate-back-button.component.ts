import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigate-back-button',
  templateUrl: './navigate-back-button.component.html',
  styleUrls: ['./navigate-back-button.component.scss']
})
export class NavigateBackButtonComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
