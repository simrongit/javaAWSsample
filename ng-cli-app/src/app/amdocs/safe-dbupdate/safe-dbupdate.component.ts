import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-safe-dbupdate',
  templateUrl: './safe-dbupdate.component.html',
  styleUrls: ['./safe-dbupdate.component.scss']
})
export class SafeDBUpdateComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
