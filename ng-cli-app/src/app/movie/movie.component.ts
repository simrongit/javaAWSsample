import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class MovieInfo {
  movie: string;
  magnet: string;
  filter: string;
  youtube: string;
  subscene: string;

  public static getEmptyInstance(): MovieInfo {
    const emptyObj: MovieInfo = {
      movie: '',
      magnet: '',
      filter: '',
      youtube: '',
      subscene: ''
    };
    return emptyObj;
  }
}
