import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemEditorComponent } from './items/item-editor/item-editor.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  HomeComponent.Route,
  NavigationComponent.Route,
  ItemEditorComponent.Route,
  ItemListComponent.Route
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
