import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../types';
import { movies } from '../constants';

@Component({
  selector: 'about',
  templateUrl: './index.html',
})
export class About {
  filter: string;
  movies: Movie[] = movies;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onClick(id: string) {
    this.router.navigate([id], {relativeTo: this.route})
  }
}
