import { Component } from '@angular/core';
import { techniques } from '../constants';

@Component({
  selector: 'home',
  templateUrl: './index.html',
})
export class Home {
  techniques: string[] = techniques
}
