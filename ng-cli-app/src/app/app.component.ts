import {Component, OnInit} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpService} from './services/http.comp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  hello = 'Hello Default';

  url = '/greeting';
  constructor(private http: HttpClient, private httpService: HttpService) {}

  //  ngOnInit(): void {
  //    this.http
  //      .get(this.url)
  //      .map(res => {
  //        return res.json;
  //      })
  //      .catch(this.errorHandling)
  //      .subscribe(result => {
  //        this.hello = result;
  //      });
  ngOnInit(): void {
    //    const myHeaders = new HttpHeaders().set('Content-Type', 'text/html');
    //    myHeaders.set('Accept', 'text/plain');
    //    myHeaders.append('Content-Type', 'application/json');
    //    const myParams = new URLSearchParams();
    //    myParams.append('name', 'manveen');
    //    const options = new RequestOptions({headers: myHeaders, params: myParams});
    this.http.get(this.url).subscribe(data => {
      // Read the result field from the JSON response.
      this.hello = data['content'];
    });
  }

  private reqMapping(res: Response): any {
    console.log('handling request');
    const body = res.json;
    return body;
  }

  private errorHandling(error: Response | any) {
    console.log('error occured');
    return Observable.throw('eeerrror');
  }

  onClickO(): void {
    console.log('clickingO');
    this.http
      .get(this.url)
      .map(this.reqMapping)
      .catch(this.errorHandling)
      .subscribe(result => {
        this.hello = result;
      });
  }

  onClickN(): void {
    console.log('clickingN');
    this.httpService
      .getN(this.url)
      .subscribe(result => {
        this.hello = result['content'];
      });
  }
  onClickS(): void {
    console.log('clicking');
    this.httpService
      .getS('/greetingstr')
      .subscribe(result => {
        this.hello = result;
      });
  }

  onClickP(): void {
    console.log('clicking');
    this.httpService
      .getP('/greeting')
      .subscribe(result => {
        this.hello = result['content'];
      });
  }

  onClick(): void {
    console.log('clicking');
    this.httpService
      .postN('/postgreeting')
      .subscribe(result => {
        this.hello = result['content'];
        console.log(this.hello);
      });
  }

}
