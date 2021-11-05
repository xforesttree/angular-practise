import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/index';
import { About } from './about/index';
import { ErrorPage } from './@shared/errorpage/errorpage.component';
import { MovieDetailComponent } from './about/movie-detail/movie-detail.component';

const appRoutes: Routes = [
  {path: '', component: Home},
  {path: 'about', component: About, children: [
    {path: ':id', component: MovieDetailComponent}
  ]},
  {path: ':error', component: ErrorPage},
  {path: '**', component: ErrorPage}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
