import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MovieService } from '../services';
import { About } from './index';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FilterPipe } from '../pipes';

@NgModule({
  declarations: [
    About,
    MovieDetailComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [
      About,
      MovieDetailComponent
  ],
  providers: [MovieService],
})

export class AboutModule {}