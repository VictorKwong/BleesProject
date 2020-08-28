import { Component, OnInit, OnDestroy } from '@angular/core';
import Glide from '@glidejs/glide';
declare const google: any;

@Component({
  selector: 'app-sections',
  templateUrl: 'sections.component.html'
})
export class SectionsComponent implements OnInit, OnDestroy {

  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
  focus7;
  focus8;
  focus9;
  page = 2;
  isCollapsed = false;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('sections-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-default');


    // Carousel
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4
    }).mount();


    // Testimonial Carousel
    new Glide('.testimonial-glide', {
      type: 'carousel',
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4
    }).mount();


    let myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    let mapOptions = {
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

    let map = new google.maps.Map(document.getElementById('map-contactus-1'), mapOptions);

    let marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Hello World!'
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

    myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    mapOptions = {
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

    map = new google.maps.Map(document.getElementById('map-contactus-2'), mapOptions);

    marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Hello World!'
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('sections-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-default');
  }
}
