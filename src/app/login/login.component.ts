import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email:["",Validators.required],
    password:["",Validators.required],
  })

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
  }

  onLogin():void{
    if (!this.loginForm.valid) {
      alert("Invalid!!")
      return;
    }

    let user : UserModel = JSON.parse(localStorage.getItem("User")||"");
    if (user.email == this.loginForm.get("email")?.value && user.password ==this.loginForm.get("password")?.value ) {
      localStorage.setItem('access','true');
      alert("Success");
    this.router.navigateByUrl("/dashboard");
    }else{
      localStorage.setItem('access','false');
      alert("Invalid!!")
    }

  }

}
