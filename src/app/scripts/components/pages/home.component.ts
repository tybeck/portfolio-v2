import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SkillComponent } from '../skill.component';

@Component({

  'selector': 'home',

  'templateUrl': 'views/components/pages/home.html',

  'directives': [
    SkillComponent
  ]

})

export class HomeComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit() {

    console.log('okay init');

  }

};
