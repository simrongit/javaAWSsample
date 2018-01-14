/**
 * New typescript file
 */
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams, HttpRequest, HttpEventType, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {PasswdInfo, PasswdSaveInfo} from '../passwd/passwd.component';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  public getN(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public getAny(url: string, caller: any): Observable<any> {
    caller.message = 'API is bieng called ...';
//    const httpHeaders = new HttpHeaders();
//    httpHeaders.set('Access-Control-Allow-Origin', '*');
//    httpHeaders.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//    return this.httpClient.get(url, {'headers': httpHeaders});
    return this.httpClient.get(url);
  }

  public getS(url: string): Observable<any> {
    return this.httpClient.get(url, {responseType: 'text'});
  }
  public getP(url: string, obj: object): Observable<any> {
    let params = new HttpParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key + ' ' + obj[key]);
        params = params.append(key, obj[key]); // .append returns clone hence need to recapture it
      }
    }
    const options = {params: params};
    return this.httpClient.get(url, options); // this also works return this.httpClient.get(url, {params: params});
  }

  public postN(url: string): Observable<any> { // Observable<number>
    //    const subject = new Subject<number>();
    const body = {content: 'Brad', id: 1};
    const params = new HttpParams().set('name', 'manveen');
    //    const req = new HttpRequest('POST', url, body, {
    //      params: params,
    //      reportProgress: true,
    //    });

    //    this.httpClient.request(req).subscribe(event => {
    //      if (event.type === HttpEventType.UploadProgress) {
    //        const percentDone = Math.round(100 * event.loaded / event.total);
    //        subject.next(percentDone);
    //      } else if (event instanceof HttpResponse) {
    //        subject.complete();
    //      }
    //    });
    //    return subject.asObservable();
    //    return this.httpClient.request(req);
    return this.httpClient.post(url, body, {params: params});
  }

  public postT(url: string, passwdInfo: PasswdInfo): Observable<any> { // Observable<number>
    return this.httpClient.post(url, passwdInfo);
  }

  public postS(url: string, passwdInfo: PasswdSaveInfo): Observable<boolean> { // Observable<number>
    return this.httpClient.post(url, passwdInfo);
  }

  public postR(url: string, passwdInfo: PasswdSaveInfo): Observable<object> { // Observable<number>
    return this.httpClient.post(url, passwdInfo);
  }

  public postV(url: string, passwdInfo: PasswdSaveInfo): Observable<string> { // Observable<number>
    return this.httpClient.post(url, passwdInfo, {responseType: 'text'});
  }

  public postNew(url: string, passwdInfo: PasswdSaveInfo): Observable<boolean> { // Observable<number>
    return this.httpClient.post(url, passwdInfo);
  }



  public postRetVoid(url: string, objToPost: object, caller: any): Observable<any> {
    caller.message = 'API is bieng called ...';
    return this.httpClient.post(url, objToPost); // for error handling use errorResponse.error.message
  }

  public postRetVoidStr(url: string, objToPost: object, caller: any): Observable<any> {
    caller.message = 'API is beign called ...';
    return this.httpClient.post(url, objToPost, {responseType: 'text'}); // return media type should be text you can access  error as errorResponse.error
  }

  public postRetAny(url: string, objToPost: object, caller: any): Observable<any> { // this is passed just to set message
    caller.message = 'API is bieng called ...';
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
    httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    console.log(httpHeaders.get('Access-Control-Allow-Origin'));
    return this.httpClient.post(url, objToPost, {headers: httpHeaders});
  }

  public postRetObj(url: string, objToPost: object, caller: any): Observable<object> { // ? if you specify certain object and returned object is different then what kind of error faced
    caller.message = 'API is bieng called ...';
    return this.httpClient.post(url, objToPost);
  }

  public postRetObjStr(url: string, str: string, caller: any): Observable<object> { // ? if you specify certain object and returned object is different then what kind of error faced
    caller.message = 'API is bieng called ...';
    return this.httpClient.post(url, str);
  }

  public postRetBool(url: string, objToPost: object): Observable<boolean> {
    return this.httpClient.post(url, objToPost);
  }
  public postSRetBool(url: string, str: string, caller: any): Observable<boolean> {
    caller.message = 'API is bieng called ...';
    return this.httpClient.post(url, str);
  }

  public postRetStr(url: string, objToPost: object, caller: any): Observable<string> { // ? if response type is not text and string is returned then what object contains .. answer null
    caller.message = 'API is bieng called ...';
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
    httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    httpHeaders = httpHeaders.set('Access-Control-Allow-Headers', 'Content-Type');
    return this.httpClient.post(url, objToPost, {headers: httpHeaders, responseType: 'text'});
  }

  public postSRetStr(url: string, str: string, caller: any): Observable<string> {
    caller.message = 'API is bieng called ...';
    return this.httpClient.post(url, str, {responseType: 'text'});
  }


}
