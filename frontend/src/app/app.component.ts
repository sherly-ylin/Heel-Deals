import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  template: '<body><app-navigation></app-navigation></body>'
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router){}

}
