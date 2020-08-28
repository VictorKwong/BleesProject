import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-resetpage',
  templateUrl: 'resetpage.component.html'
})
export class ResetpageComponent implements OnInit, OnDestroy {
  focus;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('reset-page');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('reset-page');
  }
}
