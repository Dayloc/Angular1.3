import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { CounterModule } from './counter/counter/counter.module';
import { HeroesModule } from "./heroes/heroes.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DbzModule,
    CounterModule,
    HeroesModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
