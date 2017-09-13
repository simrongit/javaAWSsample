import {Component, OnInit} from '@angular/core';
import {PasswdSaveInfo} from '../passwd.component';
import {HttpService} from '../../services/http.comp';
import {ShareDataService} from '../../services/share-data-service';

@Component({
  selector: 'app-passwd-retrieve',
  templateUrl: './passwd-retrieve.component.html',
  styleUrls: ['./passwd-retrieve.component.css']
})
export class PasswdRetrieveComponent implements OnInit {

  message: string; // can't define it as private if required to be read in html file
  constructor(private httpService: HttpService, private shareDataService: ShareDataService) {}

  retrieved: boolean;
  passwdSaveInfo: PasswdSaveInfo = PasswdSaveInfo.getEmptyInstance();
  mapObject: object;
  objectKeys = Object.keys;
  ngOnInit() {
  }

  submitInput() {
    this.httpService.postRetObj('/retPasswd', this.passwdSaveInfo, this).subscribe(
      result2 => {
        this.mapObject = result2;
        for (const key in this.mapObject) {
          if (this.mapObject.hasOwnProperty(key)) {
            console.log(key + ' ' + this.mapObject[key]);
          }
        }
        this.retrieved = true; // need to move this set after setting mapOjbect otherwise we get of rendering null mapObject because as soon as retrieved becomes true mapObject is rendered
        if (!this.mapObject) {
          this.message = 'Not expected flow R2';
        } else {
          this.message = '';
        }
      }, errorRes => {
        this.message = errorRes.error.message;
        if (this.message === 'User not found') {
          this.message = 'There is no stored password for this user';
        } else if (this.message === 'User not authenticated') {
          this.message = 'For this usere passcode didn\'t matched. Try again.';
        } else if (this.message) {
          this.message = 'Strange, you bypassed frontend validation<br/>' + this.message;
        } else {
          this.message = 'Not expected flow R1';
        }
        if (!errorRes.error) { // ! for undefined or null
          this.message = 'User and/or passcode didn\'t matched'; // can't get error response from backcend because response type is not string hence this workaround
        }
      });
  }

  decPasswd(encPasswd: string) {
    this.shareDataService.sharedEncPasswd = encPasswd;
  }
}
