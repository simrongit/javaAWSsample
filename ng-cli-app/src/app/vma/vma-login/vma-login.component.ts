import {Component, OnInit} from '@angular/core';
import {ShareDataService} from '../../services/share-data-service';

@Component({
  selector: 'app-vma-login',
  templateUrl: './vma-login.component.html',
  styleUrls: ['./vma-login.component.css']
})
export class VmaLoginComponent implements OnInit {

  constructor(private sharedDataService: ShareDataService) {}

  loggedInUser: string;
  user: string;
  passwd: string;

  ngOnInit() {
    this.loggedInUser = this.sharedDataService.sharedStr;
  }

  login() {
    // verify logic
    this.loggedInUser = this.user;
    this.sharedDataService.sharedStr = this.user;
  }

  logout() {
    this.loggedInUser = '';
    this.sharedDataService.sharedStr = '';
    this.user = '';
    this.passwd = '';
  }
}
