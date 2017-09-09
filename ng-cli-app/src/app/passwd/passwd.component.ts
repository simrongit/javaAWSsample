import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-passwd',
  templateUrl: './passwd.component.html',
  styleUrls: ['./passwd.component.css']
})
export class PasswdComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

}
export class PasswdInfo {
  passwd;
  salt;
  generatedPasswd;
  encryptedPasswd;

  public static getEmptyInstance(): PasswdInfo {
    const emptyObj: PasswdInfo = {
      passwd: 'aa',
      salt: '93066123',
      generatedPasswd: '',
      encryptedPasswd: ''
    };
    return emptyObj;
  }
}
