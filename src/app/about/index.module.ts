import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MovieService } from '../services';
import { About } from './index';

@NgModule({
  declarations: [
    About
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
      About
  ],
  providers: [MovieService],
})

export class AboutModule {}