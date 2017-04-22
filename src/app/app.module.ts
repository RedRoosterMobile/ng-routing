import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// import { AnimationsModule } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from '@angular/material';

//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import 'hammerjs';

import { MoviesModule } from './modules/movies/movies.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { PageNotFoundComponent} from './components/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MoviesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MaterialModule.forRoot(),
    //BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
