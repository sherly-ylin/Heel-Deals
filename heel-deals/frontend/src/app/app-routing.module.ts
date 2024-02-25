import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemEditorComponent } from './items/item-editor/item-editor.component';
import { ItemListComponent } from './items/item-list/item-list.component';

const routes: Routes = [
  // HomePageComponent.Route,
  ItemEditorComponent.Route,
  ItemListComponent.Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
