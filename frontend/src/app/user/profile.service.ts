import { Injectable } from '@angular/core';
import { UserData } from '../models';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PublicProfile {
  id: number | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
}


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  test_user: UserData={
    id: 1,
    pid: 777777777,
    onyen: 'emiller',
    first_name: 'Ellie',
    last_name:'Miller',
    phone: '123-456-7890',
    email:'emiller@unc.edu'
  }

  next_id = 1;
  profiles: PublicProfile[] = [
    {
    id: 1,
    first_name: 'Ellie',
    last_name:'Miller',
    phone: '123-456-7890',
    email:'emiller@unc.edu'
  },
  {
    id: 2,
    first_name: 'Joel',
    last_name:'Miller',
    phone: '123-456-7890',
    email:'jmiller@unc.edu'
  },
]

  constructor(protected snackBar: MatSnackBar) {}

  getUser(id: number): PublicProfile{
    for (let user of this.profiles){
      if (user.id = id){
        return user;
      }
    }
    return this.profiles[1];
  }

  createProfile(
    first_name: string, 
    last_name: string, 
    email: string, 
    phone: string){
    let profile = {
      id: this.next_id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone
    }
    this.profiles.push(profile);
    console.log("New profile created");
    this.next_id++;
  }

  editProfile(profile: PublicProfile): boolean{
    for(let user of this.profiles){
      if(user.id==profile.id){
        user.first_name=profile.first_name;
        user.last_name=profile.last_name;
        user.email=profile.email;
        user.phone=profile.phone;
        console.log("profile edited");
        return true;
      }
    }
    return false
  }

}
