import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss'
})
export class ProfileEditorComponent {
  public static Route={
    path: 'profile/edit',
    title: 'Profile Editor',
    component: ProfileEditorComponent,
    // children: [
    //   {
    //     path: ':user_id',
    //     component: ProfileEditorComponent,
    //   }
    // ]
  }
}
