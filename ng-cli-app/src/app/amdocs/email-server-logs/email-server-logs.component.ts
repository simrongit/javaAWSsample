import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-server-logs',
  templateUrl: './email-server-logs.component.html',
  styleUrls: ['./email-server-logs.component.scss']
})
export class EmailServerLogsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
