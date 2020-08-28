import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: 'error.component.html'
})
export class ErrorComponent implements OnInit, OnDestroy {
constructor(){}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('error-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-default');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('error-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-default');
  }
}
