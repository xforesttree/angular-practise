import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { pronouns } from '../constants';

@Component({
  selector: 'form-v1',
  templateUrl: './formv1.component.html',
})
export class FormV1 {
  @ViewChild('form') form: NgForm;
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
    //form.reset()
  }
}