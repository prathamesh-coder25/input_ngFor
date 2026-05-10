import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
@Input() public movieObj ! : Imovies
  constructor() { }

  ngOnInit(): void {
  }

}
