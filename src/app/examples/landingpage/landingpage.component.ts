import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: 'landingpage.component.html'
})
export class LandingpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }
}
