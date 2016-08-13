import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SkillComponent } from '../skill.component';
import { HideUntilDirective } from '../../directives/hide-until.directive';

@Component({

  'selector': 'home',

  'templateUrl': 'views/components/pages/home.html',

  'styleUrls': [

    'styles/components/pages/home.component.css'

  ],

  'directives': [
    SkillComponent,
    HideUntilDirective
  ]

})

export class HomeComponent {

  public showOtherSkills: boolean = <boolean>false;

  constructor(
    private router: Router) {
  }

  private showAllSkills () {

    if (!this.showOtherSkills) {

      this.showOtherSkills = true;

    }

  }

};
