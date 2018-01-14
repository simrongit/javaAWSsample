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
      passwd: '',
      salt: '',
      generatedPasswd: '',
      encryptedPasswd: ''
    };
    return emptyObj;
  }
}
export class PasswdSaveInfo {
  userId: string;
  passCode: string;
  refText: string;
  encPasswd: string;

  public static getEmptyInstance(): PasswdSaveInfo {
    const emptyObj: PasswdSaveInfo = {
      userId: '',
      passCode: '',
      refText: '',
      encPasswd: ''
    };
    return emptyObj;
  }

  public static isPopulated(obj: PasswdSaveInfo): boolean { // I have to make it static because of getEmptyInstance()
    return obj !== undefined
      && obj.userId
      && obj.passCode !== undefined && obj.passCode.match('^[0-9]{4}$')
      && obj.refText
      && obj.encPasswd !== undefined && obj.encPasswd.length === 64;
  }
}

