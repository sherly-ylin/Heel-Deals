import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public static Route = {
    path: '',
    title: 'Heel Deals',
    Component: HomePageComponent
  }

  constructor(public router: Router){}
}
