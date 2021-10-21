import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services';
import { Movie } from 'src/app/types';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
})

export class MovieComponent implements OnInit {
  selectedMovie?: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(){
    this.movieService.newMovieSelected.subscribe((movie) => {this.selectedMovie = movie})
  }
}
