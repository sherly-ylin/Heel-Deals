import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemResponse, ItemData } from './item.model';
import { UserData, UserResponse } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  nextItemId: number = 1;

  items: ItemData[] = [
    {id: 0,
      name: "name",
      cost: 0,
      description: "description"}
  ];

  nextItemIdChange: Subject<number> = new Subject<number>();
  constructor(protected http: HttpClient, protected snackBar: MatSnackBar) {}

  // getItems(): Observable<ItemResponse[]>{
  //   return this.http.get<ItemResponse[]>('/items');
  // }

  getItems(): ItemData[] {
      return this.items;
  }

  getItem(id: number): ItemData | null {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        return this.items[i];
      }
    }
    return null;
  }

  // getItem(id: string): Observable<ItemData>{
  //   return this.http.get<ItemData>('/items/{id}');
  // }

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
      
      this.nextItemId++;
  }

  // addItem(request: ItemResponse): Observable<ItemResponse>{
  //   return this.http.post<ItemResponse>('/items', request);
  // }

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

  // editItem(request: ItemResponse): Observable<ItemResponse>{
  //   return this.http.put<ItemResponse>('/items', request);
  // }

  deleteItem(item: ItemData): boolean{
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == item.id) {
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



  private itemResponseListToItemDataList(){}

  private itemResponseToItemData(){}

} 
