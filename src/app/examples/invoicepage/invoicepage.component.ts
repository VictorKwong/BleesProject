import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-invoicepage',
  templateUrl: 'invoicepage.component.html'
})
export class InvoicepageComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('invoice-page');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('invoice-page');
  }
  print(){
    window.print();
  }
}
