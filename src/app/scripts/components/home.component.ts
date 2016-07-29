import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  'selector': 'home',

  'templateUrl': 'views/components/home.html'

})

export class HomeComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit() {

    console.log('okay init');

  }

}
