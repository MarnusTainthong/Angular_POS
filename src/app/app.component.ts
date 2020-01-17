import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pos-tgm';
  name = 'mmm fff';

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

    const data = {username: 'mmff', feedback: 'hello feedback'}; // data

    // this.http.post<any>('http://localhost:3000/api', data).subscribe(result => {
      // alert(JSON.stringify(result));

      // alert(result);
      // console.log(JSON.stringify(result));

    // });
  }
}
