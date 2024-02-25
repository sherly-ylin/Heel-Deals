import { Injectable } from '@angular/core';
import { ItemService } from '../items/item.service';
import { ItemData } from '../items/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ItemData[] = [];
  totalCost: number = 0;

  constructor() {
    this.totalCost=this.getTotalCost();
  }

  addItem(item: ItemData){
    if(!this.hasItem(item.id)){
      this.items.push(item);
    }
  }

  deleteItem(item: ItemData){
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == item.id) {
        this.items.splice(i, 1);
      }
    }
  }



  getItems(): ItemData[] | null {
    return this.items.length==0?null:this.items;
  }

  getTotalCost():number{
    let total: number = 0;
    for(let i=0; i<this.items.length;i++){
      total+= this.items[i].cost;
    }
    return total;
  }

  clearCart(){
    this.items = [];
    return this.items;
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
