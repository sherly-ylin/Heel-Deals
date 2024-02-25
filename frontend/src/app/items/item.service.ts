import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemResponse, ItemData } from './item.model';
import { UserData, UserResponse } from '../models/user.model';
import { Observable, ReplaySubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  nextItemId: number = 1;

  private items: ReplaySubject<any[]> = new ReplaySubject(1);
  items$ = this.items.asObservable();

  constructor(protected http: HttpClient, protected snackBar: MatSnackBar) {}

  getItems(){
    return this.http.get<any[]>('/items').subscribe(
      (value) =>{
      this.items.next(value);
    });
  }


  // getItem(id: number): Item | null {
  //   for (let i = 0; i < this.items.length; i++) {
  //     if (this.items[i].id == id) {
  //       return this.items[i];
  //     }
  //   }
  //   return null;
  // }

  getItem(id: string): Observable<any>{
    return this.http.get<any>('/items/{id}');
  }

  // addItem(
  //   name: string,
  //   cost: number,
  //   description: string
  //   ){
  //     let item = {
  //       id: this.nextItemId,
  //       name: name,
  //       cost: cost,
  //       description: description
  //     }
  //     this.items.push(item);
  //     console.log("new item added!");
  // }

  addItem(request: ItemResponse): Observable<ItemResponse>{
    return this.http.post<ItemResponse>('/items', request);
  }

  // editItem(
  //   id: number,
  //   name: string,
  //   cost: number,
  //   description: string
  //   ): boolean{
  //     for (let i = 0; i < this.items.length; i++) {
  //       if (this.items[i].id == id) {
  //         // console.log('item to edit found');
  //         this.items[i].cost= cost;
  //         this.items[i].name = name;
  //         this.items[i].description = description;
  //         console.log("item edited!");
  //         return true;
  //       }
  //     }
  //     return false;
  // }

  editItem(request: ItemResponse): Observable<ItemResponse>{
    return this.http.put<ItemResponse>('/items', request);
  }

  // deleteItem(
  //   id: number,
  //   name: string,
  //   cost: number,
  //   description: string
  //   ): boolean{
  //     for (let i = 0; i < this.items.length; i++) {
  //       if (this.items[i].id == id) {
  //         this.items.splice(i,1);
  //         return true;
  //       }
  //     }
  //     return false;

  // }

  // hasItem(id:number): boolean{
  //   for (let i = 0; i < this.items.length; i++) {
  //     if (this.items[i].id == id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }



  private itemResponseListToItemDataList(){}

  private itemResponseToItemData(){}

} 
