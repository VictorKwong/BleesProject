import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chatpage',
  templateUrl: 'chatpage.component.html'
})
export class ChatpageComponent implements OnInit, OnDestroy {
  focus;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('chat-page');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('chat-page');
  }
}
