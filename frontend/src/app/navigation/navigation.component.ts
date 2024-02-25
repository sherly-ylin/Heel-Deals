import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  public static Route = {
    path: 'navigation',
    title: 'Navigation',
    component: NavigationComponent
  }
  constructor(public route: ActivatedRoute, public router: Router){

  }
}
