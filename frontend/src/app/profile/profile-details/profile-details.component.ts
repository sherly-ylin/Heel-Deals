import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent {
  public static Route={
    path: 'profile',
    component: ProfileDetailsComponent,
    title: 'Profile',
  }
    

}
