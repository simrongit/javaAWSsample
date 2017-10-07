import {HttpService} from '../../services/http.comp';
import {Component, OnInit} from '@angular/core';
import {ShareDataService} from '../../services/share-data-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vma-login',
  templateUrl: './vma-login.component.html',
  styleUrls: ['./vma-login.component.css']
})
export class VmaLoginComponent implements OnInit {

  constructor(private sharedDataService: ShareDataService, private httpService: HttpService, private router: Router) {}

  loggedInUser: string;
  user: string;
  passwd: string;

  message: string;

  ngOnInit() {
    this.loggedInUser = this.sharedDataService.sharedStr;
    this.user = this.sharedDataService.sharedStr2;
  }

  login() {
    this.httpService.postRetStr('/vma/login', {'userId': this.user, 'passwd': this.passwd}, this).subscribe(res => {
      this.loggedInUser = res;
      this.sharedDataService.sharedStr = this.loggedInUser;
      this.sharedDataService.sharedStr2 = this.user;
      this.message = ''; // clearing up API is being callled
      this.router.navigate(['vma/vmaal']);
    }, errRes => {
      this.message = errRes.error;
      if (this.message === 'User exist') {
        this.message = 'This user id is already taken. Or you forgot your password';
      } else if (this.message === 'DB Failure') {
        this.message = 'Backend problem';
      } else if (!this.message.startsWith('Mandatory')) {
        this.message = 'This is weired L1';
      }
    });
    this.passwd = '';
  }

  logout() {
    this.httpService.postSRetStr('/vma/logout', this.loggedInUser, this).subscribe(res => {
      this.loggedInUser = '';
      this.sharedDataService.sharedStr = '';
      this.user = '';
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
}
