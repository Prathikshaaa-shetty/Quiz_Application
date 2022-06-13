import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm = this.formBuilder.group({
    username:["",Validators.required],
    email:["",Validators.required],
    password:["",Validators.required],
    image:["",Validators.required]
  });

  isEdit: boolean = false;
  profileImage: string = "";
  router: any;

  constructor(private formBuilder:FormBuilder) {
    let user : UserModel = JSON.parse(localStorage.getItem("User")||"null");
    this.profileForm.patchValue(user);
   }

  ngOnInit() {
  }

  get username(): FormControl {
    return this.profileForm.controls.username as FormControl;
  }

  get image(): string {
    let user : UserModel = JSON.parse(localStorage.getItem("User") || "null");
    return user?.image;
  }

  onChangeImage(event:Event){
    if (event) {
      const file = (event.target as any).files[0];
      this.profileForm.get('image')?.updateValueAndValidity()
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result as string;
        this.profileForm.patchValue({
          image: reader.result as string
        });
      }
      reader.readAsDataURL(file);
    }
  }

  getProfileImage():string{
    let user : UserModel = JSON.parse(localStorage.getItem("User")||"");
    return user?.image;
  }

  onEditProfile(){
    this.isEdit = !this.isEdit;
  }

  onSubmitUser(){
    if (!this.profileForm.valid) {
      alert("Invalid!!");
      return;
    }
    let user : UserModel = {
      
      ...this.profileForm.value, image : this.profileImage
      
    }
    localStorage.setItem("User",JSON.stringify(user));
    alert("Success");
    this.isEdit = !this.isEdit;
  }

  
}
