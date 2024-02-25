import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ItemData } from "../../item.model";


@Component({
    selector: 'item-card',
    templateUrl:'./item-card.widget.html',
    styleUrl:'./item-card.widget.scss',
})
export class ItemCard{
    @Input() item!: ItemData;
    @Output() addButtonPressed = new EventEmitter<ItemData>();
    constructor(){}
}