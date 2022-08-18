import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TalkApiService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:7043/api/';

  getUsers(){
    this.httpClient.get(this.baseUrl + 'Users').subscribe(data => {
      console.log(data);
    });
  }

}
