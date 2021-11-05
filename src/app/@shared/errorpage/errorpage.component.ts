import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'error-page',
  templateUrl: './errorpage.component.html',
})
export class ErrorPage implements OnInit{
  error?: number

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    this.error = +this.route.snapshot.params['error'];
    this.route.params.subscribe(
        (params: Params) => {
          this.error = +params['error'];
        }
    );
  };
};
