import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {VM} from '../vma-allocation.component';

@Component({
  selector: 'app-vma-aloc-available',
  templateUrl: './vma-aloc-available.component.html',
  styleUrls: ['./vma-aloc-available.component.css']
})
export class VmaAlocAvailableComponent implements OnInit {

  constructor() {}

  @Input() cVmList: VM[];
  @Input() cLoggedInUser: string;

  @Output() cVmOccupied = new EventEmitter<string>();

  ngOnInit() {
  }

  lockVm(aVmName: string) {
    this.cVmOccupied.emit(aVmName);
  }

}
