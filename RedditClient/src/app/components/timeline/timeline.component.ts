import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  username: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
  }

}
