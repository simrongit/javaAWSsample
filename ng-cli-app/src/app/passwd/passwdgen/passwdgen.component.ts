import {Component, OnInit} from '@angular/core';
import {PasswdInfo} from '../passwd.component';
import {HttpService} from '../../services/http.comp';

@Component({
  selector: 'app-passwdgen',
  templateUrl: './passwdgen.component.html',
  styleUrls: ['./passwdgen.component.css']
})
export class PasswdgenComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  isCopiedG = false;
  isCopiedE = false;
  passwdInfo: PasswdInfo = PasswdInfo.getEmptyInstance(); // empty object must exist as passwd need to be assigned a value, if passwdInfo doesn't exist then passwd can't be assigned

  submitInput() {
    this.httpService
      .postT('/generatePasswd', this.passwdInfo)
      .subscribe(result => {
        this.passwdInfo = result;
        console.log(this.passwdInfo);
      });
  }

  resetInput() {
    this.passwdInfo = { // TODO change it to PasswdInfo.getEmptyInstance();
      passwd: '',
      salt: '',
      generatedPasswd: '',
      encryptedPasswd: ''
    };
  }
  ngOnInit() {
  }

}
