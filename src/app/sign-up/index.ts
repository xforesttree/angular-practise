import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pronouns } from '../constants';

@Component({
  selector: 'sign-up',
  templateUrl: './index.html',
})
export class SignUp {
  @ViewChild('f') form: NgForm;
  defaultAdress: string = "Dear fan";
  pronouns: string[] = pronouns;

  onSubmit() {
    const { form, value } = this.form
    if (value.raffle === ''){
      form.patchValue({
        raffle: false
      })
    }
    console.warn(this.form)
    form.reset()
  }
}
