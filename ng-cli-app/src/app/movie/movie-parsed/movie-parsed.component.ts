import {Component, OnInit} from '@angular/core';
import {MovieInfo} from '../movie.component';
import {HttpService} from '../../services/http.comp';

@Component({
  selector: 'app-movie-parsed',
  templateUrl: './movie-parsed.component.html',
  styleUrls: ['./movie-parsed.component.css']
})
export class MovieParsedComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  movieLists: MovieInfo[][];

  ngOnInit() {
    // this.httpService.getAny('assets/json/movies/parsedMovies.json', this).subscribe(
    this.httpService.getAny('/mov/mpg', this).subscribe(
      data => {
        this.movieLists = data;
      }
      , error => console.log(error));
  }

}
