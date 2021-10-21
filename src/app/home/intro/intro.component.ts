import { Component } from '@angular/core';
import { movies } from 'src/app/constants';
import { Movie } from 'src/app/types';
import { MovieService } from 'src/app/services';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
})
export class Intro {
  movies: Movie[] = movies;
  selectedMovieId?: string;

  constructor(private movieService: MovieService) {}

  onSelectMovie(movieSelect: HTMLSelectElement){
    this.movieService.onSelected(movieSelect.value);
  }
}
