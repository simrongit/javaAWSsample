import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-performance-log-aanalyzer',
  templateUrl: './performance-log-aanalyzer.component.html',
  styleUrls: ['./performance-log-aanalyzer.component.scss']
})
export class PerformanceLogAanalyzerComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
