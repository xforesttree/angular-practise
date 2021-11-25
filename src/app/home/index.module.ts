import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Home } from './index';
import { Intro } from './intro/intro.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from '../services';
import { ElipsePipe } from './../pipes';

@NgModule({
  declarations: [
    Home,
    Intro,
    MovieComponent,
    ElipsePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      Home
  ],
  providers: [MovieService],
})
export class HomeModule {}