import {Component, OnInit} from '@angular/core';
import {ShareDataService} from '../../services/share-data-service';
// import VM from '../vma.component';

@Component({
  selector: 'app-vma-allocation',
  templateUrl: './vma-allocation.component.html',
  styleUrls: ['./vma-allocation.component.css']
})


export class VmaAllocationComponent implements OnInit {

  constructor(private sharedDataService: ShareDataService) {}

  vmList: VM[];
  loggedInUser: string;
  activeTab: string;
  message: string;

  ngOnInit() {
    //    this.activeTab = 'lbu';
    this.setTestData();
    this.loggedInUser = this.sharedDataService.sharedStr;
  }

  setTestData() {
    //    this.loggedInUser = 'sim';
    this.vmList = [{vmName: 'simrond01v', user: 'sim'}, {vmName: 'simrond02v', user: 'sim1'}, {vmName: 'simrond03v', user: ''}];
  }

  setTab(tabValue: string) {
    this.message = '';
    this.activeTab = tabValue;
  }

  lockVM(aVmName: string) {
    for (const vm of this.vmList) {
      if (vm.vmName === aVmName) {
        vm.user = this.loggedInUser;
        break;
      }
    }
  }

  releaseVM(aVmName: string) {
    for (const vm of this.vmList) {
      if (vm.vmName === aVmName) {
        vm.user = '';
        break;
      }
    }
  }

  isActiveFor(tabValue: string): boolean {
    if (tabValue === this.activeTab) {
      return true;
    }
    return false;
  }

  addVM(newVM: VM) {
    for (const vm of this.vmList) {
      if (vm.vmName === newVM.vmName) {
        this.message = newVM.vmName + ' is already added';
        return;
      }
    }
    this.vmList = this.vmList.concat(newVM);
    this.message = 'Added ' + newVM.vmName;
  }

  removeVM(newVM: VM) {
    const newList = this.vmList.filter(function(obj) {
      return obj.vmName !== newVM.vmName;
    });
    if (newList.length === this.vmList.length) {
      this.message = newVM.vmName + ' doesn\'t exist';
    } else {
      this.vmList = newList;
      this.message = 'Removed ' + newVM.vmName;
    }
  }

  logout() {
    this.loggedInUser = '';
    this.sharedDataService.sharedStr = '';
  }
}

export class VM {
  vmName: string;
  user: string;
}
