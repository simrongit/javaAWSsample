import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fallout-trend-analyzer',
  templateUrl: './fallout-trend-analyzer.component.html',
  styleUrls: ['./fallout-trend-analyzer.component.scss']
})
export class FalloutTrendAnalyzerComponent implements OnInit {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
