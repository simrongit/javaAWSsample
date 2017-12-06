import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bpm-flow-creator',
  templateUrl: './bpm-flow-creator.component.html',
  styleUrls: ['./bpm-flow-creator.component.scss']
})
export class BpmFlowCreatorComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
