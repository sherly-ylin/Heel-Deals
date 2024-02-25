import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public static Route = {
    path: '',
    title: 'Heel Deals',
    Component: HomeComponent
  }

  constructor(public route: ActivatedRoute, public router: Router){}
}
