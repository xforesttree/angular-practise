import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services';
import { Movie } from 'src/app/types';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
})

export class MovieDetailComponent implements OnInit {
  currentMovie?: Movie;

  constructor(private route: ActivatedRoute,  private movieService: MovieService) {}

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.currentMovie = this.movieService.findById(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.currentMovie = this.movieService.findById(params['id'])
      }
    )
  }
}
