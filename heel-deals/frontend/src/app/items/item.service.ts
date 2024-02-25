import { Injectable } from '@angular/core';

import { Category, Item } from './item-list/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  nextItemId: number = 1;

  items: Item[] = [];

  constructor() { }

  getItems(): Item[]{
    return this.items;
  }

  getItem(id: number): Item | null {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        return this.items[i];
      }
    }
    return null;
  }

  addItem(
    name: string,
    cost: number,
    description: string
    ){
      let item = {
        id: this.nextItemId,
        name: name,
        cost: cost,
        description: description
      }

      this.items.push(item);
      console.log("new item added!");

  }

  editItem(
    id: number,
    name: string,
    cost: number,
    description: string
    ): boolean{
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == id) {
          // console.log('item to edit found');
          this.items[i].cost= cost;
          this.items[i].name = name;
          this.items[i].description = description;
          console.log("item edited!");
          return true;
        }
      }
      return false;
  }

  deleteItem(
    id: number,
    name: string,
    cost: number,
    description: string
    ): boolean{
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == id) {
          this.items.splice(i,1);
          return true;
        }
      }
      return false;

  }

  hasItem(id:number): boolean{
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        return true;
      }
    }
    return false;
  }

} 
