import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.comp';

@Component({
  selector: 'app-post-sim',
  templateUrl: './post-sim.component.html',
  styleUrls: ['./post-sim.component.css']
})
export class PostSimComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  aUrl: string;
  aText: string;
  aRes: string;
  aErrRes: string;
  message: string;

  ngOnInit() {
  }

  submitInput() {
    this.httpService.postRetObjStr(this.aUrl, this.aText, this).subscribe(
      res => {
        this.aRes = JSON.stringify(res);
        this.message = '';
        this.aErrRes = '';
      }, errorRes => {
        this.aErrRes = errorRes.message;
      });
  }


}
