import {Injectable} from '@angular/core';

@Injectable()
export class ShareDataService {

  sharedEncPasswd: string; // this is shared between two information is transformation 1. gen -> save 2. ret -> dec   this might create unwanted behaviour

  sharedStr: string;

  reset() {
    this.sharedEncPasswd = undefined;
  }

}
