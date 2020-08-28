import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-500error',
  templateUrl: '500error.component.html'
})
export class Error500Component implements OnInit, OnDestroy {
  constructor(){}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('error-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('error-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-primary');
  }
}
