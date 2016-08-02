import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  'selector': 'about',

  'templateUrl': 'views/components/pages/about.html',

  'directives': []

})

export class AboutComponent {

  constructor(
    private router: Router) {
  }

};
