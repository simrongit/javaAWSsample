import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {VM} from '../vma-allocation.component';

@Component({
  selector: 'app-vma-aloc-lockedbyou',
  templateUrl: './vma-aloc-lockedbyou.component.html',
  styleUrls: ['./vma-aloc-lockedbyou.component.css']
})
export class VmaAlocLockedbyouComponent implements OnInit {

  constructor() {}

  @Input() cVmList: VM[];
  @Input() cLoggedInUser: string;
  @Input() cUser: string;
  @Output() cVmReleased = new EventEmitter<string>();

  ngOnInit() {
  }

  onRelease(aVmName: string) {
    this.cVmReleased.emit(aVmName);
  }

}
