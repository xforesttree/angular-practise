import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { pronouns } from '../constants';

@Component({
  selector: 'sign-up',
  templateUrl: './index.html',
})
export class SignUp {
  v1: boolean = false;

  changeVersion(){
    this.v1 = !this.v1
  }
}