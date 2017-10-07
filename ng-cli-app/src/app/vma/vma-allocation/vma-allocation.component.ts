import {Component, OnInit} from '@angular/core';
import {ShareDataService} from '../../services/share-data-service';
import {HttpService} from '../../services/http.comp';
// import VM from '../vma.component';

@Component({
  selector: 'app-vma-allocation',
  templateUrl: './vma-allocation.component.html',
  styleUrls: ['./vma-allocation.component.css']
})


export class VmaAllocationComponent implements OnInit {

  constructor(private sharedDataService: ShareDataService, private httpService: HttpService) {}

  vmList: VM[];
  loggedInUser: string;
  activeTab: string;
  message: string;
  userId: string;

  ngOnInit() {
    this.getVM();
    //    this.activeTab = 'lbu';
    //    this.setTestData();
    this.loggedInUser = this.sharedDataService.sharedStr;
    this.userId = this.sharedDataService.sharedStr2;
  }

  setTestData() {
    //    this.loggedInUser = 'sim';
    this.vmList = [{vmName: 'simrond01v', user: 'sim'}, {vmName: 'simrond02v', user: 'sim1'}, {vmName: 'simrond03v', user: ''}];
  }

  setTab(tabValue: string) {
    this.message = '';
    this.activeTab = tabValue;
  }

  isActiveFor(tabValue: string): boolean {
    if (tabValue === this.activeTab) {
      return true;
    }
    return false;
  }

  getVM() {
    this.httpService.getAny('/vma/getAllVMs', this).subscribe(res => {
      this.vmList = res;
      this.message = ''; // clearing up API is being callled
    }, errRes => {
      this.message = errRes.error.messagae;
    });
  }

  lockVM(aVmName: string) {
    for (const vm of this.vmList) {
      if (vm.vmName === aVmName) {
        // Success, Not logged in(User not logged in, so you bypassed frontend check), VM not exist, Already allocated, DB Failure
        this.httpService.postRetStr('/vma/allocateVM', {'userKey': this.loggedInUser, 'vmName': vm.vmName}, this).subscribe(res => {
          vm.user = this.userId;
          this.message = ''; // clearing up API is being callled
        }, errRes => {
          this.message = errRes.error;
          if (this.message === 'Not logged in') {
            this.message = 'You are not logged in on backend. Click logout and trying login again';
          } else if (this.message === 'VM not exist') {
            this.message = 'VM not exist. Looks like admin removed it. Click refresh to update your list.';
          } else if (this.message === 'Already allocated') {
            this.message = 'Someone already allocated it. Click refresh to update your list.';
          } else if (this.message === 'DB Failure') {
            this.message = 'Backend Problem A1';
          } else if (!this.message.startsWith('Mandatory')) {
            this.message = 'This is weired A1';
          }
        });
        break;
      }
    }
  }

  releaseVM(aVmName: string) {
    for (const vm of this.vmList) {
      if (vm.vmName === aVmName) {
        // Success, Not logged in(User not logged in, so you bypassed frontend check), VM not exist, Already released, DB Failure, Locked by other
        this.httpService.postRetStr('/vma/freeVM', {'userKey': this.loggedInUser, 'vmName': vm.vmName}, this).subscribe(res => {
          vm.user = '';
          this.message = ''; // clearing up API is being callled
        }, errRes => {
          this.message = errRes.error;
          if (this.message === 'Not logged in') {
            this.message = 'You are not logged in on backend. Click logout and trying login again';
          } else if (this.message === 'VM not exist') {
            this.message = 'VM not exist. Looks like admin removed it. Click refresh to update your list.';
          } else if (this.message === 'Already released') {
            this.message = 'Already release. Click refersh to update your list. Strange, how you managed it';
          } else if (this.message === 'Locked by other') {
            this.message = 'This is locked by someone. May be admin forcefully released it from you. Click referesh to update your list';
          } else if (this.message === 'DB Failure') {
            this.message = 'Backend Problem A2';
          } else if (!this.message.startsWith('Mandatory')) {
            this.message = 'This is weired A2';
          }
        });
        break;
      }
    }
  }

  addVM(newVM: VM) {
    this.httpService.postRetStr('/vma/addNewVM', {'userKey': this.loggedInUser, 'vmName': newVM.vmName}, this).subscribe(res => {
      this.vmList = this.vmList.concat(newVM);
      this.message = 'Added ' + newVM.vmName;
    }, errRes => {
      this.message = errRes.error;
      if (this.message === 'Not logged in') {
        this.message = 'You are not logged in on backend. Click logout and trying login again';
      } else if (this.message === 'VM exist') {
        this.message = 'VM exist. Are you sharing admin password?.';
      } else if (this.message === 'Not authorized') {
        this.message = 'If you are not admin, how come you sent this request';
      } else if (this.message === 'DB Failure') {
        this.message = 'Backend Problem A2';
      } else if (this.message === 'VM name not permitted') {
        this.message = 'Try something better than this';
      } else if (!this.message.startsWith('Mandatory')) {
        this.message = 'This is weired A2';
      }
    });
  }

  removeVM(newVM: VM) {
    this.httpService.postRetStr('/vma/remVM', {'userKey': this.loggedInUser, 'vmName': newVM.vmName}, this).subscribe(res => {
      const newList = this.vmList.filter(function(obj) {
        return obj.vmName !== newVM.vmName;
      });
      this.vmList = newList;
      this.message = 'Removed ' + newVM.vmName;
    }, errRes => {
      this.message = errRes.error;
      if (this.message === 'Not logged in') {
        this.message = 'You are not logged in on backend. Click logout and trying login again';
      } else if (this.message === 'VM not exist') {
        this.message = 'VM not exist. Are you sharing admin password?.';
      } else if (this.message === 'Not authorized') {
        this.message = 'If you are not admin, how come you sent this request';
      } else if (this.message === 'DB Failure') {
        this.message = 'Backend Problem A3';
      } else if (!this.message.startsWith('Mandatory')) {
        this.message = 'This is weired A3';
      }
    });
  }

  logout() {
    this.httpService.postSRetStr('/vma/logout', this.loggedInUser, this).subscribe(res => {
      this.loggedInUser = '';
      this.sharedDataService.sharedStr = '';
      this.userId = '';
      this.sharedDataService.sharedStr2 = '';
      this.message = ''; // clearing up API is being callled
    }, errRes => {
      this.message = errRes.error;
      if (this.message === 'Not logged in') {
        this.message = 'Not logged in, how come you are able to try logout';
      } else if (this.message === 'DB Failure') {
        this.message = 'Backend problem';
      } else if (!this.message.startsWith('Mandatory')) {
        this.message = 'This is weired L2';
      }
    });
  }

  refresh() {
    this.getVM();
  }
}

export class VM {
  vmName: string;
  user: string;
}
