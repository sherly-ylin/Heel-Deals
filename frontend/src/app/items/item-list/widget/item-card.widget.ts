import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ItemData } from "../../../models";


@Component({
    selector: 'item-card',
    templateUrl:'./item-card.widget.html',
    styleUrl:'./item-card.widget.scss',
})
export class ItemCard{
    @Input() item!: ItemData;
    @Input() url!: string;
    @Output() addButtonPressed = new EventEmitter<ItemData>();
    @Output() deleteButtonPressed = new EventEmitter<ItemData>()
    constructor(){}
}