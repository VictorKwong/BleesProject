import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: 'ecommerce.component.html'
})
export class EcommerceComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('ecommerce-page');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('ecommerce-page');
  }
}
