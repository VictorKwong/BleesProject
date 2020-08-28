import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: 'aboutus.component.html'
})
export class AboutusComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('about-us');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('about-us');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-primary');
  }
}
