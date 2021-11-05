import { Component } from '@angular/core';
import { Link } from '../../types';
import { links } from '../../constants';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class Nav {
  links: Link[] = links
}
