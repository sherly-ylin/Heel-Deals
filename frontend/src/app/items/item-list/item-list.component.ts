import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { ItemData } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  public static Route = {
    path: '',
    title: 'Items',
    component: ItemListComponent
  }
  
  protected nextItemId: number;
  private _subscription: any;

  constructor(
    public itemService: ItemService, 
    public router: Router){
      this.nextItemId = itemService.nextItemId;
      this._subscription = itemService.nextItemIdChange.subscribe(
        (value) => {
          this.nextItemId = value;
        }
      );
  }

  addItem(item: ItemData){
    this.itemService.addItem(item.name,item.cost,item.description);
  }
}
