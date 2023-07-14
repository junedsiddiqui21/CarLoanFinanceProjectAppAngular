import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent   {

emailform : FormGroup;

constructor(private fb : FormBuilder){}
  ngOnInit(): void {
    this.emailform = this.fb.group({
      emailId : [],
      fromEmail : [],
      toEmail : [],
      subject : [],
      textMessage : []
    })
  }

  sendemail(){
    console.log(this.emailform.value);
  }




}
