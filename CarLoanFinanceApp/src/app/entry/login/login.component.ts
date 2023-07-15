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
        console.log(response.userType);
        sessionStorage.setItem('userType',response.userType);
        this.router.navigateByUrl("/dashboard");
        
      }
      else{
        alert("Enter Correct Uername And Password");
      }
    }
     
   )


  // if(this.loginform.controls['username'].value=='re',
  // this.loginform.controls['password'].value=='re'){
  //   sessionStorage.setItem('userType','re');
  //   this.router.navigateByUrl("/dashboard");
  // }
  // else if(this.loginform.controls['username'].value=='oe',
  // this.loginform.controls['username'].value=='oe'){
  //   sessionStorage.setItem('userType','oe');
  //   this.router.navigateByUrl("/dashboard")
  // }
  // else if(this.loginform.controls['username'].value=='cm',
  // this.loginform.controls['username'].value=='cm'){
  //   sessionStorage.setItem('userType','cm');
  //   this.router.navigateByUrl("/dashboard")
  // }
  // else if(this.loginform.controls['username'].value=='ah',
  // this.loginform.controls['username'].value=='ah'){
  //   sessionStorage.setItem('userType','ah');
  //   this.router.navigateByUrl("/dashboard")
  // }
  // else
  // {
  //   alert("Enter correct username password....!!")
  // }
}


}
