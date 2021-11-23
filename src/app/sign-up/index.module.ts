import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FormV1 } from './formv1.component';
import { FormV2 } from './formv2.component';
import { SignUp } from './index';

@NgModule({
  declarations: [
    SignUp,
    FormV1,
    FormV2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
      SignUp
  ],
})
export class SignUpModule {}