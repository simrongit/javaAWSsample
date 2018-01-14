import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-status-reporting',
  templateUrl: './status-reporting.component.html',
  styleUrls: ['./status-reporting.component.scss']
})
export class StatusReportingComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
