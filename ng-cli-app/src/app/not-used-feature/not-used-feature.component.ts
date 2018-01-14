import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpService} from '../services/http.comp';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-not-used-feature',
  templateUrl: './not-used-feature.component.html',
  styleUrls: ['./not-used-feature.component.css']
})
export class NotUsedFeatureComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient, private httpService: HttpService) {}

  hello = 'Hello Default';

  ngOnInit() {
    console.log('init called');
  }

  ngOnDestroy() {
    console.log('destroy called');
  }

  onClickGet(): void {
    this.httpService.getN('/greeting').subscribe(
      result => {
        this.hello = result['content'];
      }, errorRes => {
        console.log('error occured');
      });
  }

  onClickGetS(): void {
    this.httpService.getS('/greetingstr').subscribe(
      result => {
        this.hello = result;
      });
  }

  onClickGetP(): void {
    console.log('clicking');
    this.httpService.getP('/greeting', {'name': 'SomeName'}).subscribe(
      result => {
        this.hello = result['content'];
      });
  }

  onClickI(): void {
    console.log('clicking');
    this.httpService.getN('/greeting/5').subscribe(
      result => {
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

  onClickGetCM(): void {
    this.http.get('/greeting').map(this.reqMapping).catch(this.errorHandling).subscribe(
      result => {
        console.log('subscriber being executed');
        this.hello = result;
      }, errorRes => {
        console.log('subscriber error part being executed');
      });
  }

  private reqMapping(res: Response): any {
    console.log('map part for request');
    const body = res.json;
    return body;
  }

  private errorHandling(error: Response | any) {
    console.log('error occured');
    return Observable.throw('eeerrror');
  }


}
