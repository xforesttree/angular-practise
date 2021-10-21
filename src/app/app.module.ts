import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/index.module';
import { AboutModule } from './about/index.module';

import { AppComponent } from './app.component';
import { Nav } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav
  ],
  imports: [
    HomeModule,
    AboutModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
