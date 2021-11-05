import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../../services';

import { Movie } from 'src/app/types';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
})

export class MovieComponent implements OnInit {
  selectedMovie?: Movie;

  constructor(private movieService: MovieService, private router: Router,) {}

  ngOnInit() {
    this.movieService.newMovieSelected.subscribe((movie) => {this.selectedMovie = movie})
  }

  onClick() {
    this.router.navigate(['about', this.selectedMovie.id])
  }
}
