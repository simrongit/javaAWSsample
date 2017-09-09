import {Component, OnInit} from '@angular/core';
import {PasswdInfo} from '../passwd.component';
import {HttpService} from '../../services/http.comp';

@Component({
  selector: 'app-passwddecrypt',
  templateUrl: './passwddecrypt.component.html',
  styleUrls: ['./passwddecrypt.component.css']
})
export class PasswddecryptComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  isCopiedE: false;
  passwdInfo: PasswdInfo = {
    passwd: '',
    salt: '',
    generatedPasswd: '',
    encryptedPasswd: ''
  };

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
  }

}
