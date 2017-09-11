import {Component, OnInit} from '@angular/core';
// import {Http, Response, RequestOptions, Headers} from '@angular/http';
// import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  title = 'ToolsBox';

  //  ngOnInit(): void {
  //    this.http
  //      .get(this.url)
  //      .map(res => {
  //        return res.json;
  //      })
  //      .catch(this.errorHandling)
  //      .subscribe(result => {
  //        this.hello = result;
  //      });
  ngOnInit(): void {
    //    const myHeaders = new HttpHeaders().set('Content-Type', 'text/html');
    //    myHeaders.set('Accept', 'text/plain');
    //    myHeaders.append('Content-Type', 'application/json');
    //    const myParams = new URLSearchParams();
    //    myParams.append('name', 'manveen');
    //    const options = new RequestOptions({headers: myHeaders, params: myParams});
    //    this.http.get(this.url).subscribe(data => {
    // Read the result field from the JSON response.
    //      this.hello = data['content'];
    //  });
  }


}
