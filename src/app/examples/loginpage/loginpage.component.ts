import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: 'loginpage.component.html'
})
export class LoginpageComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }
}
