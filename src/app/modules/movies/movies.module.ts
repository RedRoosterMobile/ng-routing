import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesService } from './services/movies.service';
import { MoviesRoutingModule } from './movies-routing.module';
// import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
    imports: [CommonModule, MoviesRoutingModule],
    declarations: [MoviesListComponent],
    providers: [MoviesService]
})

export class MoviesModule {}