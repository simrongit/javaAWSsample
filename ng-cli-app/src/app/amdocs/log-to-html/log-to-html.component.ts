import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-log-to-html',
  templateUrl: './log-to-html.component.html',
  styleUrls: ['./log-to-html.component.scss']
})
export class LogToHtmlComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
