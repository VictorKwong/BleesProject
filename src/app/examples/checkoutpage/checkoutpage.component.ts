import { Component, OnInit, OnDestroy } from '@angular/core';
import Choices from 'choices.js';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: 'checkoutpage.component.html'
})
export class CheckoutpageComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('checkout-page');
    const choicesSingle = document.getElementById('choices-single-default');
    if (choicesSingle) {
      const choice = new Choices(choicesSingle, {
        searchEnabled: false,
      });
    }
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('checkout-page');
  }
}
