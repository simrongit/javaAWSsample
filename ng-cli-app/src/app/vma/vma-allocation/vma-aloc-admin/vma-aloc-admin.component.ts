import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {VM} from '../vma-allocation.component';

@Component({
  selector: 'app-vma-aloc-admin',
  templateUrl: './vma-aloc-admin.component.html',
  styleUrls: ['./vma-aloc-admin.component.css']
})
export class VmaAlocAdminComponent implements OnInit {

  vmToAct: string;

  constructor() {}

  @Input() cVmList: VM[];
  @Input() cLoggedInUser: string;
  @Output() cVmReleased = new EventEmitter<string>();
  @Output() cVmAdd = new EventEmitter<VM>();
  @Output() cVmRemove = new EventEmitter<VM>();

  ngOnInit() {
  }

  onRelease(aVmName: string) {
    this.cVmReleased.emit(aVmName);
  }

  onAdd() {
    // check if it already exist
    this.cVmAdd.emit({vmName: this.vmToAct, user: ''});
  }

  onRemove() {
    this.cVmRemove.emit({vmName: this.vmToAct, user: ''});
  }
}
