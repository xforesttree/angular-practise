import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ErrorPage } from './errorpage.component';

@NgModule({
  declarations: [
    ErrorPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
      ErrorPage
  ],
})

export class ErrorPageModule {}