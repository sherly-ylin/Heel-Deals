import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* HTTP and Auth */
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { AuthModule } from '@auth0/auth0-angular';

/* UI / Material Dependencies */
import { DatePipe, NgForOf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

/* Material UI Dependencies */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationComponent } from './navigation/navigation.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemEditorComponent } from './items/item-editor/item-editor.component';
import { ItemCard } from './items/item-list/widget/item-card.widget';
import { CartComponent } from './cart/cart.component';
import { CartItemCard } from './cart/widget/cart-item-card.widget';
import { ProfileEditorComponent } from './user/profile-editor/profile-editor.component';
import { SellerPageComponent } from './user/seller-page/seller-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ItemListComponent,
    ItemEditorComponent,
    ItemCard,
    CartComponent,
    CartItemCard,
    ProfileEditorComponent,
    SellerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    /* Material UI */
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,


    RouterModule,

    // AuthModule.forRoot({
    //   domain: 'dev-08gfiviz2cofbd3s.us.auth0.com',
    //   clientId: '2QmE0VL94t1qvsUtu0G51Zdvi7s16FVm',
    //   authorizationParams: {
    //     redirect_uri: window.location.origin,
    //   },
    // }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
