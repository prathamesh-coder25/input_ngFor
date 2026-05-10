import { Component, OnInit } from '@angular/core';
import { Ipost } from '../models/post';
import { postsData } from '../const/post';


@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  postsArr : Array<Ipost> = []

  constructor() { }

  ngOnInit(): void {
    this.postsArr = postsData
  }

}

