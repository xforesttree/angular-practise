import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
      SignUp
  ],
})
export class SignUpModule {}