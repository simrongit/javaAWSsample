import {Component, OnInit, OnDestroy} from '@angular/core';
import {PasswdInfo} from '../passwd.component';
import {HttpService} from '../../services/http.comp';
import {ShareDataService} from '../../services/share-data-service';

@Component({
  selector: 'app-passwddecrypt',
  templateUrl: './passwddecrypt.component.html',
  styleUrls: ['./passwddecrypt.component.css']
})
export class PasswddecryptComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService, private shareDataService: ShareDataService) {}

  message = '';
  isCopiedE: false;
  passwdInfo: PasswdInfo = PasswdInfo.getEmptyInstance();

  submitInput() {
    this.httpService.postRetAny('/decryptPasswd', this.passwdInfo, this).subscribe(
      res => {
        this.passwdInfo = res;
        if (!this.passwdInfo.generatedPasswd) {
          this.message = 'Decryption was unsuccesful. Check your vault password and salt or provided encrypted password is incorrect.';
        } else if (this.passwdInfo.generatedPasswd === 'Failed') {
          this.passwdInfo.generatedPasswd = '';
          this.message = 'Backend error occured E1';
        } else {
          this.message = '';
        }
      }, eres => {
        this.message = eres.error.message;
        if (this.message) {
          this.message = 'Strange, you bypassed frontend validation<br/>' + this.message;
        } else {
          this.message = 'Not expected flow E1';
        }
      });
  }

  resetInput() {
    this.passwdInfo = PasswdInfo.getEmptyInstance();
  }

  ngOnInit() {
    this.passwdInfo.encryptedPasswd = this.shareDataService.sharedEncPasswd;
  }

  ngOnDestroy() {
    this.shareDataService.sharedEncPasswd = undefined; // this is for case when user jumped from retrieve to decrypt, in this case this value get shown in save screen as well
  }

}
