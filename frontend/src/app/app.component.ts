import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  template: '<app-navigation></app-navigation>'
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router){}

}
