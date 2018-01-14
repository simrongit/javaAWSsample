import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {VM} from '../vma-allocation.component';
import {HttpService} from '../../../services/http.comp';

@Component({
  selector: 'app-vma-aloc-admin',
  templateUrl: './vma-aloc-admin.component.html',
  styleUrls: ['./vma-aloc-admin.component.css']
})
export class VmaAlocAdminComponent implements OnInit {

  vmToAct: string;
//  isAdmin: boolean;
  message: string;

  constructor(private httpService: HttpService) {}

  @Input() cVmList: VM[];
  @Input() cLoggedInUser: string;
  @Input() cUser: string;

  @Output() cVmReleased = new EventEmitter<string>();
  @Output() cVmAdd = new EventEmitter<VM>();
  @Output() cVmRemove = new EventEmitter<VM>();

  ngOnInit() {
//    this.httpService.postSRetBool('/vma/admin', this.cLoggedInUser, this).subscribe(res => {
//      this.isAdmin = res;
//      this.message = '';
//    }, errRes => {
//      this.message = errRes.error.message;
//      if (!this.message.startsWith('Mandatory')) {
//        this.message = 'This is weired AA1';
//      }
//    });
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

  isVMExist() {
    for (const vm of this.cVmList) {
      if (vm.vmName === this.vmToAct) {
        return true;
      }
    }
    return false;
  }
}
