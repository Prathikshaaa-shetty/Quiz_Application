import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm=this.formBuilder.group({
    username:["",Validators.required],
    email:["",Validators.required],
    password:["",Validators.required],
    image:["",Validators.required]
  });

  public profileImage : any = "";

  

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
  }

  onChangeImage(event:Event){
    if (event) {
      const file = (event.target as any).files[0];
      this.signupForm.get('image')?.updateValueAndValidity()
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result;
        this.signupForm.patchValue({
          image: reader.result as string
        });
      }
      reader.readAsDataURL(file);
    }
  }

  onSignUp(){
    if (!this.signupForm.valid) {
      alert("Invalid!!");
      return;
    }
    let user : UserModel = {
      ...this.signupForm.value, image : this.profileImage
    }
    localStorage.setItem("User",JSON.stringify(user));
    alert("Success");
    this.router.navigateByUrl("/login");
  }
}
