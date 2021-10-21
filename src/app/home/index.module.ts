import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Home } from './index';
import { Intro } from './intro/intro.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from '../services';

@NgModule({
  declarations: [
    Home,
    Intro,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
      Home
  ],
  providers: [MovieService],
})
export class HomeModule {}