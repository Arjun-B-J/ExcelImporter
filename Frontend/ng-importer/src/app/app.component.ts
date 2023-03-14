import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface USERS {
    Id: Number;
    Name: String;
    Username: String;
    Email: String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Users: USERS[] = [];
  constructor(private http: HttpClient) { 
  }
  ngOnInit(): void {
    this.http.get<USERS[]>("http://localhost:5000/getJSON").subscribe((data) => {this.Users=data} )

  }

}