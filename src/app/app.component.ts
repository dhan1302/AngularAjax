import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private httpClient: HttpClient;
  title = 'AngularAjax';
  refObj: any = {};
  ajaxObj: any = {};

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getRequest() {
    console.log("HELLO AJAX");

    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    
    // HTTP GET REQUEST :: AJAX REQUST
    let obs1 = this.httpClient.get(url);
    obs1.subscribe((serverData) => {
      console.log(serverData);

      this.refObj = serverData;
      this.refObj.ts = new Date().toLocaleTimeString();

      this.ajaxObj = serverData;
      this.ajaxObj.ts1 = new Date();
    });



  }
}
