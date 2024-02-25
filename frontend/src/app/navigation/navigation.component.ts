import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { ItemListComponent } from '../items/item-list/item-list.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  public static Route = {
    path: '',
    title: 'Navigation',
    component: NavigationComponent
  }
  constructor(public route: ActivatedRoute, public router: Router){
    // router.navigateByUrl('/items');
  }
}
