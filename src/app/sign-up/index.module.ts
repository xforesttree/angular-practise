import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SignUp } from './index';

@NgModule({
  declarations: [
    SignUp,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
      SignUp
  ],
})
export class SignUpModule {}