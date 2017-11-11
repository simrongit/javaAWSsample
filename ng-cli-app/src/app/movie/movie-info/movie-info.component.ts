import {Component, OnInit} from '@angular/core';
import {MovieInfo} from '../movie.component';
import {HttpService} from '../../services/http.comp';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  constructor(private httpService: HttpService, private sanitizer: DomSanitizer) {}

  movieInfos: MovieInfo[];
  trailerUrl: SafeResourceUrl;
  isCopiedM = false;
  message: string;

  ngOnInit() {
    //    this.httpService.getAny('assets/json/movies/movieInfos.json', this).subscribe(
    this.httpService.getAny('/mov/movieg', this).subscribe(
      data => {
        this.movieInfos = data;
      }
      , error => console.log(error));
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(''); // to avoid error
  }

  //  ngOnInit() {
  //    this.movieInfo = MovieInfo.getEmptyInstance();
  //    this.movieInfo.movie = 'The+Nice+Guys+2016+1080p+BluRay+x264+DTSJYK';
  //    this.movieInfo.magnet = 'magnet:?xt=urn:btih:03d8bd2ebc1e98938ac723733361f3e6237f8bf3&dn=The+Nice+Guys+2016+1080p+BluRay+x264+DTS-JYK&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969';
  //    this.movieInfo.filter = '';
  //    this.movieInfo.youtube = 'https://www.youtube.com/watch?v=WVd-EuoEf3U';
  //    this.movieInfo.subscene = 'https://subscene.com/subtitle/download?mac=xDf75kLZe73KxoZlXPu6Pv_BOAf_F91JK1-U76wj4q4B7_M90iSSJJTO1hszxAm2LP84lqJvNqdVbPEZi8exeBfgWhaWtyZmOVjh9n7xLvK5JcNwc1X4Wum9D2hlrNg50';
  //  }

  updateUrl(url: string) {
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url.replace('watch?v=', 'embed/'));
  }

  addFilter(movie: string) {
    this.httpService.postSRetStr('/mov/addMovie', movie, this).subscribe(
      data => {
        this.message = data;
        if (data === 'Success') {
          this.message = 'API call was success';
          const newList = this.movieInfos.filter(function(obj) {
            return obj.filter !== movie;
          });
          this.movieInfos = newList;
        } else if (data === 'Failed') {
          this.message = 'Persistence Failed';
        } else {
          this.message = 'Not expected flow M1';
        }
      }
      , error => {
        console.log(error);
        this.message = 'Problem occurred';
      });
  }
}
