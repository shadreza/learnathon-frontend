import { Component, OnInit } from '@angular/core';
import { TalkApiService } from './../../services/talk-api.service';

@Component({
  selector: 'app-talk-with-api-heartbeat',
  templateUrl: './talk-with-api-heartbeat.component.html',
  styleUrls: ['./talk-with-api-heartbeat.component.scss']
})
export class TalkWithApiHeartbeatComponent implements OnInit {

  constructor(private talkWithApiService:TalkApiService) { }

  startSending() {
    this.talkWithApiService.getUsers();
    console.log('hi')
  }

  ngOnInit(): void {
  }

}
