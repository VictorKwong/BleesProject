import { Component, OnInit, OnDestroy } from '@angular/core';
import Choices from 'choices.js';

@Component({
  selector: 'app-accountsettings',
  templateUrl: 'accountsettings.component.html'
})
export class AccountsettingsComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('account-settings');

    const choice = new Choices('#choices-single-default', {
      searchEnabled: false,
    });
    const badge = new Choices('#badges', {
      delimiter: ',',
      editItems: true,
      maxItemCount: 5,
      removeItemButton: true,
    });
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('account-settings');
  }
}
