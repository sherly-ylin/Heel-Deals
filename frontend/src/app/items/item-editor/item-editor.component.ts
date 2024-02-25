import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from '../item.service';
import { Category, ItemData } from '../item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrl: './item-editor.component.scss'
})
export class ItemEditorComponent {
  public static Route = {
    path: 'items/edit/:item_id',
    title: 'Item Editor',
    component: ItemEditorComponent
  }

  // categoryKeys = Object.entries(Category).map(([key, value]) => ({ name:key, value:value }));

  /** Form controls (individual form items) */
  nameControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', [Validators.required]);
  costControl = new FormControl(0, [Validators.required]);
  // categoryControl = new FormControl<Category|null>(null, [Validators.required]);

  /** Form group */
  public itemForm = this.formBuilder.group({
    name: this.nameControl,
    description: this.descriptionControl,
    cost: this.costControl,
  })

  // Current id of the item
  id: number = -1
  // whether or not is new
  isNew: boolean = false;


  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    protected formBuilder: FormBuilder,
    private router: Router,
    protected snackBar: MatSnackBar
    ){}
    ngOnInit():void{
      this.id = this.route.snapshot.params['item_id'];
      this.isNew = this.route.snapshot.params['item_id'] == 'new';
      // If the timer is not new, set existing timer data and update the forms.
      // if (!this.isNew) {
      //   this.id = route.snapshot.params['pomo_id'];
      //   itemService.getItem(this.id).subscribe((itemData) => {
      //     this.itemForm.setValue({
      //       name: itemData.name,
      //       description: itemData.description,
      //       cost: itemData.cost,
      //       category: itemData.category
      //     });
      // });

      // if (!this.isNew) {
      //   this.id = this.route.snapshot.params['item_id'];
      //   let currentItem: ItemData = this.itemService.getItem(this.id) as ItemData
      //   if( currentItem!= null){
      //     this.itemForm.setValue({
      //       name: currentItem.name,
      //       description: currentItem.description,
      //       cost: currentItem.cost
      //     });

      //   }

      // }
    }
    public onSubmitForm() {
      // First, ensure that the form is valid (all validators pass). Otherwise, display a snackbar error.
      // if (this.itemForm.valid) {
      //   // If the item is new, create it.
      //   if (this.isNew) {
      //     this.itemService.addItem(
      //         this.itemForm.value.name!,
      //         this.itemForm.value.cost!, 
      //         this.itemForm.value.description!
      //         )
      //     this.onSuccess();
      //   } else {
      //     // Edit the existing item
      //     if(this.itemService.editItem(
      //       this.id,
      //       this.itemForm.value.name!,
      //       this.itemForm.value.cost!, 
      //       this.itemForm.value.description!
      //       )){
      //         this.onSuccess();
      //       }else{
      //         this.onError();
      //       }
      //   }
      // } else {
      //   this.snackBar.open('Please enter values in the form correctly.', '', {
      //     duration: 2000
      //   });
      // }
    }

  
    private onSuccess(): void {
      this.router.navigate(['/items']);
  
      let message: string = !this.isNew ? 'Item Updated' : 'Item Created';
  
      this.snackBar.open(message, '', { duration: 2000 });
  
      this.itemForm.reset();
    }
  
    private onError(): void {
      let message: string = !this.isNew
        ? 'Error: Item Not Updated. '
        : 'Error: Item Not Created. ';
  
      this.snackBar.open(message, '', {
        duration: 2000
      });
    }


    // getCategoryLabel(category: Category){
    //   switch (category){
    //     case Category.Book:
    //       return "Book";
    //     case Category.Clothing:
    //       return "Clothing";
    //     case Category.Furniture:
    //       return "Furniture"
    //     case Category.Technology:
    //       return "Technology"
    //     case Category.Other:
    //       return "Other"
    //     default: 
    //       return "--"
    //   }
    // }
    

}
