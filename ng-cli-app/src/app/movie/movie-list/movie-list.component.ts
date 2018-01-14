import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.comp';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  movieFilters: string[];

  ngOnInit() {
    //    this.httpService.getAny('assets/json/movies/movieFilter.json', this).subscribe(
    this.httpService.getAny('/mov/mlg', this).subscribe(
      data => {
        this.movieFilters = data;
      }
      , error => console.log(error));
  }

}
