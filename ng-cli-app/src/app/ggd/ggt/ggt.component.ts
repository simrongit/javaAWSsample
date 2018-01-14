import {Component, OnInit} from '@angular/core';
import {GGInfo} from './GGInfo';
import {HttpService} from '../../services/http.comp';
import {System} from 'typescript';
// import * as Lzw from 'lzwcompress'; keeping it just for syntax part

@Component({
  selector: 'app-ggt',
  templateUrl: './ggt.component.html',
  styleUrls: ['./ggt.component.css']
})

export class GgtComponent implements OnInit {

  ggdata: [string];

  message: string;

  printGGInfo: GGInfo;

  listGGInfo: GGInfo[];

  count = 1; // internal counter for shabad count
  iIndex = 1; // user input for shabad count
  fileFetchIndex = 0;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getN('assets/json/ggInfo' + this.fileFetchIndex + '.json').subscribe(
      data => {
        this.listGGInfo = data;
        this.printGGInfo = this.listGGInfo[this.count];
      }
      , error => console.log(error));
    this.httpService.getN('assets/json/ggd/ggsData.json').subscribe(
      data => {
        this.ggdata = data;
      }
      , error => console.log(error));
  }

  next() {
    if (this.count < this.listGGInfo.length - 1) {
      this.count += 1;
    } else {
      ++this.fileFetchIndex;
      this.httpService.getN('assets/json/ggInfo' + this.fileFetchIndex + '.json').subscribe(
        data => {
          this.listGGInfo = this.listGGInfo.concat(data);
          this.count += 1;
          this.printGGInfo = this.listGGInfo[this.count];
        }
        , error => {
          console.log(error);
          --this.fileFetchIndex;
        });
    }
    this.iIndex = this.count;
    this.printGGInfo = this.listGGInfo[this.count];
  }

  prev() {
    if (this.count > 1) {
      this.count -= 1;
    }
    this.iIndex = this.count;
    this.printGGInfo = this.listGGInfo[this.count];
  }

  jumpTo() { // I think I should add file loading logic over here as well ?
    if (this.iIndex > 0 && this.iIndex < this.listGGInfo.length) {
      this.count = parseInt('' + this.iIndex, 10); // on runtime javascript assign string value to iIndex, which changes count from number to string hence this forceful casting
      this.printGGInfo = this.listGGInfo[this.count];
    }
  }

  /*
    isRaag(ggInfo: GGInfo): boolean {
      if (ggInfo.raag !== this.prevGGInfo.raag) {
        this.prevGGInfo.raag = ggInfo.raag;
        return true;
      }
      return false;
    }

    isGhar(ggInfo: GGInfo): boolean {
      if (ggInfo.ghar !== this.prevGGInfo.ghar) {
        this.prevGGInfo.ghar = ggInfo.ghar;
        return true;
      }
      return false;
    }

      isIndex(ggInfo: GGInfo): boolean {
        if (ggInfo.index && ggInfo.index !== this.prevGGInfo.index) {
          this.prevGGInfo.index = ggInfo.index;
          return true;
        }
        return false;
      }

    isPage(ggInfo: GGInfo): boolean {
      if (ggInfo.page && ggInfo.page !== this.prevGGInfo.page) {
        this.prevGGInfo.page = ggInfo.page;
        return true;
      }
      return false;
    }

    isPand(ggInfo: GGInfo): boolean {
      if (ggInfo.pand !== this.prevGGInfo.pand) {
        this.prevGGInfo.pand = ggInfo.pand;
        return true;
      }
      return false;
    }
     * */

  myFunction() {
    const sel = window.getSelection();      // get the selection then
    if (!sel || !sel.toString()) {
      return;
    }
    const range = sel.getRangeAt(0);        // the range at first selection group
    const rect = range.getBoundingClientRect(); // and convert this to useful data

    // document.getElementById('demo').innerHTML = sel;
    const someIdVar = document.getElementById('someId');

    // document.body.removeChild(someIdVar);
    someIdVar.parentNode.removeChild(someIdVar);

    const div = document.createElement('a');   // make box
    div.style.position = 'fixed';              // fixed positioning = easy mode
    div.style.top = rect.top + 'px';       // set coordinates
    div.style.left = rect.left + 'px';
    div.style.height = rect.height + 'px'; // and size
    div.style.width = rect.width + 'px';
    div.id = 'someId';
    div.href = '#';
    const att = document.createAttribute('title');
    att.value = this.getMeaning(sel.toString());
    this.message = this.getMeaning(sel.toString());
    div.setAttributeNode(att);
    document.getElementById('some').appendChild(div);            // finally append
  }

  getMeaning(input1) {
    for (let i = 0; i < this.ggdata.length; i++) {
      if (this.ggdata[i].substr(0, input1.length) === input1) {
        return this.ggdata[i];
      }
    }
  }

}


