import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemEditorComponent } from './items/item-editor/item-editor.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CartComponent } from './cart/cart.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';

const routes: Routes = [
  HomeComponent.Route,
  ItemEditorComponent.Route,
  ItemListComponent.Route,
  CartComponent.Route,
  ProfileDetailsComponent.Route,
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
