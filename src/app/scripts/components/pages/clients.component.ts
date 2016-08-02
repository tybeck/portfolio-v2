import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  'selector': 'clients',

  'templateUrl': 'views/components/pages/clients.html',

  'directives': []

})

export class ClientsComponent {

  constructor(
    private router: Router) {
  }

};
