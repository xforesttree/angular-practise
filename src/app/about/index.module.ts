import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { About } from './index';

@NgModule({
  declarations: [
    About
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
      About
  ],
})
export class AboutModule {}