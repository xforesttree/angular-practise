import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { pronouns } from '../constants';
import { movies } from 'src/app/constants';
import { Movie } from '../types';

@Component({
  selector: 'form-v2',
  templateUrl: './formv2.component.html',
})
export class FormV2 implements OnInit {
  defaultAdress: string = "Dear fan";
  pronouns: string[] = pronouns;
  movies: Movie[] = movies;
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      'userInfo': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'pronouns': new FormControl(null),
        'adress': new FormControl(this.defaultAdress),
      }),
      'contactInfo': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'raffle': new FormControl(false),
      'favouriteMovies': new FormArray([])
    })
  }

  onSubmitV2(){
    console.warn(this.form)
    //this.form.reset()
  }

  getControls(){
    return(this.form.get('favouriteMovies') as FormArray).controls
  }

  onAddFavouriteMovie(){
    const control = new FormControl(null);
    (<FormArray>this.form.get('favouriteMovies')).push(control)
  }
}