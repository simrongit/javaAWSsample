import {Component, OnInit} from '@angular/core';
import {PasswdInfo} from '../passwd.component';
import {HttpService} from '../../services/http.comp';
import {ShareDataService} from '../../services/share-data-service';

@Component({
  selector: 'app-passwddecrypt',
  templateUrl: './passwddecrypt.component.html',
  styleUrls: ['./passwddecrypt.component.css']
})
export class PasswddecryptComponent implements OnInit {

  constructor(private httpService: HttpService, private shareDataService: ShareDataService) {}


  isCopiedE: false;
  passwdInfo: PasswdInfo = PasswdInfo.getEmptyInstance();

  isAllFieldsPopulated(): boolean {
    return this.passwdInfo !== undefined
      && this.passwdInfo.passwd !== undefined && this.passwdInfo.passwd.length > 0
      && this.passwdInfo.salt !== undefined && this.passwdInfo.salt.length > 0
      && this.passwdInfo.encryptedPasswd !== undefined && this.passwdInfo.encryptedPasswd.length > 0;
  }

  submitInput() {
    console.log('passwdgen http call');
    this.httpService
      .postT('/decryptPasswd', this.passwdInfo)
      .subscribe(result => {
        this.passwdInfo = result;
        console.log(this.passwdInfo);
      });
  }

  resetInput() {
    this.passwdInfo = {
      passwd: '',
      salt: '',
      generatedPasswd: '',
      encryptedPasswd: ''
    };
  }

  ngOnInit() {
    this.passwdInfo.encryptedPasswd = this.shareDataService.sharedEncPasswd;
  }

}
