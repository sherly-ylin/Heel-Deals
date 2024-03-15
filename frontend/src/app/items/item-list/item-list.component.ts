import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { ItemData } from '../../models';
import { CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  public static Route = {
    path: 'items',
    title: 'Items',
    component: ItemListComponent
  }
  
  protected nextItemId: number;
  private _subscription: any;

  constructor(
    public itemService: ItemService, 
    public cartService: CartService,
    public router: Router,
    private snackBar:MatSnackBar){
      this.nextItemId = itemService.nextItemId;
      this._subscription = itemService.nextItemIdChange.subscribe(
        (value) => {
          this.nextItemId = value;
        }
      );
  }

  addItem(item: ItemData){
    this.cartService.addItem(item);
    this.snackBar.open('Item Added', '', { duration: 2000 });
  }


}
