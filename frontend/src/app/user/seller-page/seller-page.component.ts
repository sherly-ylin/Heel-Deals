import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrl: './seller-page.component.scss'
})
export class SellerPageComponent {
  public static Route={
      path: 'user/sell',
      // path: 'user/:user_id',
      component: SellerPageComponent,
      // children:[
      //   {
      //     path: ':user_id',
      //     component: UserPageComponent
      //   }
      // ]
  }
  
}
