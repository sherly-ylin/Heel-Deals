import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProfileService, PublicProfile } from '../profile.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss'
})
export class ProfileEditorComponent {
  public static Route={
    path: 'profile/edit',
    title: 'Profile Editor',
    // component: ProfileEditorComponent,
    children: [
      {
        path: ':user_id',
        component: ProfileEditorComponent,
      }
    ]
  }

  /** Form Controls */
  firstNameControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email, Validators.pattern(/unc\.edu$/)]);
  phoneControl = new FormControl('123-456-7890', [Validators.required, Validators.pattern(/^\d{0,3}\-\d{0,3}\-\d{0,4}$/)]);


  /** Form Group */
  public profileForm = this.formBuilder.group({
    first_name: this.firstNameControl,
    last_name: this.lastNameControl,
    email: this.emailControl,
    phone: this.phoneControl,
  })

  user_id: number = 0;

  constructor(
    private profileService: ProfileService, 
    private route: ActivatedRoute, 
    private router: Router, 
    protected formBuilder: FormBuilder,
    protected snackBar: MatSnackBar){}
  
    ngOnInit():void{
      this.user_id = this.route.snapshot.params['user_id'];
      let currentUser: PublicProfile = this.profileService.getUser(this.user_id);
      
      this.profileForm.setValue({
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        email: currentUser.email,
        phone: currentUser.phone
      });
    }

    public onSubmitForm(){
      if(this.profileForm.valid){
        this.profileService.editProfile({
          id: this.user_id,
          first_name: this.profileForm.value.first_name!,
          last_name: this.profileForm.value.last_name!,
          email: this.profileForm.value.email!,
          phone: this.profileForm.value.phone!
        });
        this.snackBar.open('Profile Updated', '', {duration: 2000});
      }else{
        this.snackBar.open('Error: Profile NOT Updated', '', {duration: 2000});
      }
      
    }

}
