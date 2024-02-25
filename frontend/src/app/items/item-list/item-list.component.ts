import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Item } from '../item.model';

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
  
  constructor(
    public itemService: ItemService, 
    public router: Router){

  }


  addItem(item: Item){
    this.itemService.addItem(item.name,item.cost,item.description);
  }
}
