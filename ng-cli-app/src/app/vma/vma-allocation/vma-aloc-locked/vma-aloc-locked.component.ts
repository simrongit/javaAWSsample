import {Component, OnInit, Input} from '@angular/core';
import {VM} from '../vma-allocation.component';

@Component({
  selector: 'app-vma-aloc-locked',
  templateUrl: './vma-aloc-locked.component.html',
  styleUrls: ['./vma-aloc-locked.component.css']
})
export class VmaAlocLockedComponent implements OnInit {

  constructor() {}

  @Input() cVmList: VM[];
  @Input() cLoggedInUser: string;
  @Input() cUser: string;

  ngOnInit() {
  }

}
