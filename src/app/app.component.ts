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
  apiKey = "xxxxxxx";
  refObj: any = [];
  ajaxObj: any = {};

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getRequest() {
    console.log("HELLO AJAX");

    let url = 'https://jsonplaceholder.typicode.com/posts';
    
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

  getRequest1() {
    try{
      console.log(new Date());

      const latlong = `19.0274146, 73.0582253`;
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlong}&sensor=false&key=${this.apiKey}`;

      // HTTP GET REQUEST :: AJAX REQUST
      let obs1 = this.httpClient.get(url);
      obs1.subscribe((serverData) => {
        console.log(serverData);
      });

    }catch(err){
      console.log(err);
    }
  }


  getRequest2() {
    try{
      let url = `http://localhost:8080/demoapp/spring/k/3`;

      // HTTP GET REQUEST :: AJAX REQUST
      let obs1 = this.httpClient.get(url);
      obs1.subscribe((serverData) => {
        console.log(serverData);
      });

    }catch(err){
      console.log(err);
    }
  }


  postRequest() {
    try{
      console.log("POST", new Date());

      let url = 'https://jsonplaceholder.typicode.com/posts';
      let postData = {
        'title' : 'CDAC',
        'body' : 'Ajinkiya',
        'userId': 1,
        'lang' : 'hindi',
        'latlong' : '123, 123'
      };
    
      // HTTP POST REQUEST :: AJAX REQUST
      let obs1 = this.httpClient.post(url, postData);
      obs1.subscribe((serverData)=>{
        console.log(serverData);
      });

    }catch(err){
      console.log(err);
    }
  }

}
