import { Component, OnInit } from '@angular/core';
import { Imovies } from '../models/movie';
import { movieArray } from '../const/movie';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {
moviesArr :Array<Imovies> = []
  constructor() { }

  ngOnInit(): void {
    this.moviesArr = movieArray
  }

}
