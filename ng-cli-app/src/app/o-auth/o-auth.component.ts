import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.comp';
import {Location} from '@angular/common';

@Component({
  selector: 'app-o-auth',
  templateUrl: './o-auth.component.html',
  styleUrls: ['./o-auth.component.css']
})
export class OAuthComponent implements OnInit {

  message: string;
  code: string; // code = 'b5b7b382606c571bf92e';
  private clientId = '66e7f15d28f2db6af2fe';
  private clientSecret = 'd2e4fc7dfce452639e117d31ecf569a5a95b61ef';
  private redirectUri = 'http://localhost:4200/oa';
  private generalUri = 'http://sim.io';
  anyObj: any;
  token: string;
  tokenType: string;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private location: Location) {}

  gitCodeGeneration() {
    window.location.href = 'http://github.com/login/oauth/authorize' + '?client_id=' + this.clientId + '&scope=repo&redirect_uri=' + this.redirectUri;
    //    this.httpService.getAny('http://github.com/login/oauth/authorize' + '?client_id=' + this.clientId + '&scope=repo&redirect_uri=' + this.redirectUri, this).subscribe(res => {
    //      this.message = res;
    //    }
    //      , errRes => {
    //        this.message = 'Call to git failed';
    //      });
  }

  gitGeneratedCode() {
    this.httpService.getAny('oauth/gitcode', this).subscribe(res => {
      this.code = res;
      this.message = res;
    }
      , errRes => {
        this.message = 'Call to get code failed';
      });
  }

  gitGetBearer() {
//    window.location.href = 'http://github.com/login/oauth/access_token' + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&code=' + this.code + '&redirect_uri=' + this.redirectUri;


//    this.httpService.postRetStr('https://github.com/login/oauth/access_token', {client_id: this.clientId, client_secret: this.clientSecret, code: this.code}, this).subscribe(res => {
//      this.anyObj = res;
////      this.token = res.security_token;
////      this.type = res.type;
//    }
//      , errRes => {
//        this.message = 'Call to get code failed';
//      });

    this.httpService.getAny('http://github.com/login/oauth/access_token' + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&code=' + this.code + '&redirect_uri=' + this.redirectUri, this).subscribe(res => {
      this.token = res;
      this.message = res;
      console.log(res);
    }
      , errRes => {
        this.message = 'Call to get code failed';
      });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        console.log(JSON.stringify(params));
        console.log(params['code']);
        this.code = params['code'];
        console.log(JSON.stringify(params));
        console.log(params['access_token']);
        this.token = params['access_token'];
        console.log(params['token_type']);
        this.tokenType = params['token_type'];
      });
    this.location.replaceState('oa');
  }


}
