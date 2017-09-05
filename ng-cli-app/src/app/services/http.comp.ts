/**
 * New typescript file
 */
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams, HttpRequest, HttpEventType, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {PasswdInfo} from '../passwd/passwd.component';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  public getN(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
  public getS(url: string): Observable<any> {
    return this.httpClient.get(url, {responseType: 'text'});
  }
  public getP(url: string): Observable<any> {
    const params = new HttpParams().set('name', 'manveen');
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
}
