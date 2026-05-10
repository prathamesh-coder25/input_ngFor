import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../models/post';


@Component({
  selector: 'app-post-card',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() getPost !: Ipost

  constructor() { }

  ngOnInit(): void {
  }

}
