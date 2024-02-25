import { Component } from '@angular/core';
import { ItemService } from '../items/item.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  
  constructor(public itemService: ItemService){}
}
