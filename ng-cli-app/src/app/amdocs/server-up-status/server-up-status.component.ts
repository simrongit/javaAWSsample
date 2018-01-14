import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-server-up-status',
  templateUrl: './server-up-status.component.html',
  styleUrls: ['./server-up-status.component.scss']
})
export class ServerUpStatusComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
