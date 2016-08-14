'use strict';

import {
  Component,
  Input
} from '@angular/core';

import {
  Router
} from '@angular/router';

@Component({

  'selector': 'common-button',

  'templateUrl': 'views/components/common/button.html',

  'styleUrls': [

    'styles/components/common/button.component.css'

  ]

})

export class ButtonComponent {

  @Input() text: string = '';
  @Input() navigate: string = '';

  constructor(
    private router: Router) {

  }

  public clicked (): void {

    if (this.router && this.router.navigate) {

      this.router.navigate([this.navigate]);

    }

  }

};
