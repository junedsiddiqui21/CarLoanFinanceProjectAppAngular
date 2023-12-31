import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommmonService } from 'src/app/shared/commmon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {

  loginform : FormGroup;
  constructor(private fb : FormBuilder, private router:Router, private cs : CommmonService){}
  ngOnInit(): void {

    this.loginform = this.fb.group({
      username : [],
      password : [],
      userType : []
    })   
  }

onlogin(){
  console.log(this.loginform.value)

  let username : string = this.loginform.controls['username'].value;
  let password : string = this.loginform.controls['password'].value;
  
  this.cs.getUserLoginData(username,password).subscribe(
    (response : any)=>
    {
      if(response!=null){
        console.log(response);
        sessionStorage.setItem('userType',JSON.stringify(response));
      }
      else{
        alert("Enter Correct Uername And Password");
      }
    }
}


}
