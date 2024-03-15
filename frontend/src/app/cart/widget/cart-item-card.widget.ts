import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ItemData } from "../../models";


@Component({
    selector: 'cart-item-card',
    templateUrl:'./cart-item-card.widget.html',
    styleUrl:'./cart-item-card.widget.scss',
})
export class CartItemCard{
    @Input() item!: ItemData;
    @Output() deleteButtonPressed = new EventEmitter<ItemData>();
    constructor(){}
}