import { Component, OnInit, OnDestroy } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-contactus',
  templateUrl: 'contactus.component.html'
})
export class ContactusComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  focus2;
  focus3;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('contact-page');

    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-default');

    const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    const mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#444444'
          }]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [{
            color: '#f2f2f2'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [{
            visibility: 'off'
          }]
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [{
            saturation: -100
          }, {
            lightness: 45
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [{
            visibility: 'simplified'
          }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.icon',
          stylers: [{
            visibility: 'off'
          }]
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [{
            visibility: 'off'
          }]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [{
            color: '#C5CBF5'
          }, {
            visibility: 'on'
          }]
        }
      ]
    };

    const map = new google.maps.Map(document.getElementById('map-contactus-3'), mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Hello World!'
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('contact-page');

    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-default');
  }
}
