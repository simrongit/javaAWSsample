import {Component, OnInit, OnDestroy} from '@angular/core';
import {PasswdInfo} from '../passwd.component';
import {HttpService} from '../../services/http.comp';
import {ShareDataService} from '../../services/share-data-service';
// import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passwdgen',
  templateUrl: './passwdgen.component.html',
  styleUrls: ['./passwdgen.component.css']
})
export class PasswdgenComponent implements OnInit {

  constructor(private httpService: HttpService, private shareDataService: ShareDataService, private router: Router) {}

  isCopiedG = false;
  isCopiedE = false;
  passwdInfo: PasswdInfo = PasswdInfo.getEmptyInstance(); // empty object must exist as passwd need to be assigned a value, if passwdInfo doesn't exist then passwd can't be assigned
  message: string;
  //  validationForm: FormGroup;
  submitInput() {
    this.httpService.postRetAny('/generatePasswd', this.passwdInfo, this).subscribe(
      res => {
        this.passwdInfo = res;
        if (!this.passwdInfo.generatedPasswd || !this.passwdInfo.encryptedPasswd || !this.passwdInfo.salt) {
          this.message = 'Backend issue G2';
        } else {
          this.message = '';
        }
      }, eres => {
        this.message = eres.error.message;
        if (this.message) {
          this.message = 'Strange, you bypassed frontend validation\n' + this.message;
        } else {
          this.message = 'Not expected flow G1';
        }
      });
  }

  resetInput() {
    this.passwdInfo = PasswdInfo.getEmptyInstance();
    this.shareDataService.sharedEncPasswd = ''; // reseting shared information as well
  }

  savePasswd() {
    this.shareDataService.sharedEncPasswd = this.passwdInfo.encryptedPasswd;
  }

  changeRoute(routeValue) { // not used now, just kept for reference
    this.router.navigate([routeValue]);
  }

  ngOnInit() {
    //    this.validationForm = new FormGroup({
    //      'salt': new FormControl(this.passwdInfo.salt, [
    //        Validators.required,
    //        Validators.minLength(8),
    ////        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    //      ])
    ////      ,
    ////      'alterEgo': new FormControl(this.passwdInfo.alterEgo),
    ////      'power': new FormControl(this.hero.power, Validators.required)
    //    });
  }

}
