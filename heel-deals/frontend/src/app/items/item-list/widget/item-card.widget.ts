import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Item } from "../item.model";


@Component({
    selector: 'item-card',
    templateUrl:'./item-card.widget.html',
    styleUrl:'./item-card.widget.scss',
})
export class ItemCard{
    @Input() item!: Item;
    @Output() addButtonPressed = new EventEmitter<Item>();
    constructor(){}
}