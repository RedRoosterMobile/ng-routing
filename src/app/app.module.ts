import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { MoviesModule } from './modules/movies/movies.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CharactersListComponent } from './components/characters-list/characters-list.component';

import { CharacterComponent } from './components/character/character.component';
import { PageNotFoundComponent} from './components/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MoviesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
