import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pricingpage',
  templateUrl: 'pricingpage.component.html'
})
export class PricingpageComponent implements OnInit, OnDestroy {
  focus;
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('pricing-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-white');
    navbar.classList.remove('navbar-dark');

    const logoImage: any = document.getElementById('brand-logo');
    logoImage.src = 'assets/img/brand/red.png';
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('pricing-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-white');
    navbar.classList.add('navbar-dark');

    const logoImage: any = document.getElementById('brand-logo');
    logoImage.src = 'assets/img/brand/argon-white.png';

  }
}
