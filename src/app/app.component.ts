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

      const apiKey = "AIzaSyCvL60mDf-7t56qjJ9TFHDyvqJ3NuzrO1Y";
      const latlong = `19.0274146, 73.0582253`;
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlong}&sensor=false&key=${apiKey}`;

      // HTTP GET REQUEST :: AJAX REQUST
      let obs1 = this.httpClient.get(url);
      obs1.subscribe((serverData) => {
        console.log(serverData);

      });

    }catch(err){
      console.log(err);
    }
  }

}
