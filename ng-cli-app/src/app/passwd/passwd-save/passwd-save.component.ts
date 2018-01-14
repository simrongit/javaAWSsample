import {Component, OnInit, OnDestroy} from '@angular/core';
import {PasswdSaveInfo} from '../passwd.component';
import {HttpService} from '../../services/http.comp';
import {ShareDataService} from '../../services/share-data-service';

@Component({
  selector: 'app-passwd-save',
  templateUrl: './passwd-save.component.html',
  styleUrls: ['./passwd-save.component.css']
})
export class PasswdSaveComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService, private shareDataService: ShareDataService) {}

  existingUser = true;
  saved: boolean;
  message = '';
  passwdSaveInfo: PasswdSaveInfo = PasswdSaveInfo.getEmptyInstance();

  ngOnInit() {
    this.passwdSaveInfo.encPasswd = this.shareDataService.sharedEncPasswd;
  }

  submitInput() {
    this.httpService.postRetVoid('/savePasswd', this.passwdSaveInfo, this).subscribe(
      nullRes => {
        this.message = 'Saved';
      }, errorRes => {
        this.message = errorRes.error.message;
        if (this.message === 'User not found') {
          this.message = 'This user doesn\'t exist. For creating new user uncheck the checkbox';
          console.log(this.message.endsWith('button'));
        } else if (this.message === 'User not authenticated') {
          this.message = 'Passcode didn\'t matched. If you intend to create new user then select different user id';
        } else if (this.message.endsWith('DB failed')) {
          this.message = 'Transaction to database call failed';
        } else if (this.message) {
          this.message = 'Strange, you bypassed frontend validation<br/>' + this.message;
        } else {
          this.message = 'Not expected flow S1';
        }
      });
  }

  isPopulated(): boolean {
    return PasswdSaveInfo.isPopulated(this.passwdSaveInfo);
  }

  createUser() {
    this.httpService.postRetVoid('/newUser', this.passwdSaveInfo, this).subscribe(
      nullRes => {
        this.message = 'Saved';
      }, errorRes => {
        this.message = errorRes.error.message;
        if (this.message === 'User exist') {
          this.message = 'This user id already taken please provide new';
        } else if (this.message.endsWith('DB failed')) {
          this.message = 'Transaction to database call failed';
        } else if (this.message) {
          this.message = 'Strange, you bypassed frontend validation<br/>' + this.message;
        } else {
          this.message = 'Not expected flow S1';
        }
      });
  }

  ngOnDestroy() {
    this.shareDataService.sharedEncPasswd = undefined; // this is for case when user jumped from generate to save, in this case this value get shown in retrieve screen as well
  }

}
