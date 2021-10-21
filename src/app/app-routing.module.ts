import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/index';
import { About } from './about/index';

const appRoutes: Routes = [
  {path: '', component: Home},
  {path: 'about', component: About},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
