import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.comp';

@Component({
  selector: 'app-ggs',
  templateUrl: './ggs.component.html',
  styleUrls: ['./ggs.component.css']
})
export class GgsComponent implements OnInit {

  ggdata: [string];

  ascis: [[number, number]];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getN('assets/json/ggd/ggsAscii.json').subscribe(
      data => {
        this.ascis = data;
      }
      , error => console.log(error));
    this.httpService.getN('assets/json/ggd/ggsData.json').subscribe(
      data => {
        this.ggdata = data;
        this.filter(); // expecting ggsAscii.json to load first as its shorter
      }
      , error => console.log(error));
  }

  addToInput(chr) {
    (<HTMLInputElement>document.getElementById('input1')).value += chr;
    this.filter();
  }


  filter() {
    for (let i = 0; i < this.ascis.length; i++) {
      document.getElementById('button' + this.ascis[i][0]).style.color = 'black';
      this.ascis[i][1] = 0;
    }
    const input1 = (<HTMLInputElement>document.getElementById('input1')).value;
    console.log(input1);
    const thePara = document.getElementById('thePara');
    thePara.innerHTML = '';
    let countOfResult = 0;
    for (let i = 0; i < this.ggdata.length; i++) {
      if (this.ggdata[i].substr(0, input1.length) === input1) {
        ++countOfResult;
        if (countOfResult < 20) {
          thePara.innerHTML += this.ggdata[i] + '<br/>' + '\n';
        }
        const index2d = this.indexOf2d(this.ggdata[i].charCodeAt(input1.length));
        if (index2d !== 100) {
          this.ascis[index2d][1] = this.ascis[index2d][1] + 1;
        }
      }
    }
    if (input1 === '') {
      for (let i = 0; i < 20; i++) {
        thePara.innerHTML += this.ggdata[i] + '<br/>' + '\n';
      }
    }
    for (let i = 0; i < this.ascis.length; i++) {
      if (this.ascis[i][1] > 0) {
        document.getElementById('button' + this.ascis[i][0]).style.color = 'red';
      }
    }
  }

  indexOf2d(chrAscii) {
    for (let i = 0; i < this.ascis.length; i++) {
      if (chrAscii === this.ascis[i][0]) {
        return i;
      }
    }
    return 100;
  }

}

