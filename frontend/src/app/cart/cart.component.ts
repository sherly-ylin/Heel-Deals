import { Component } from '@angular/core';
import { ItemService } from '../items/item.service';
import { CartService } from './cart.service';
import { ItemData } from '../items/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(public cartService: CartService){}


}
