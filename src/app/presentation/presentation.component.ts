import { Component, OnInit, OnDestroy } from '@angular/core';

import Glide from '@glidejs/glide';

@Component({
  selector: 'app-presentation',
  templateUrl: 'presentation.component.html'
})
export class PresentationComponent implements OnInit, OnDestroy {
  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    new Glide('.presentation-cards', {
      type: 'carousel',
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 5
    }).mount();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-primary');
  }
}
