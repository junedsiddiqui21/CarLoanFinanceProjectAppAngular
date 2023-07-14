import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommmonService } from 'src/app/shared/commmon.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {

  enqform : FormGroup;
  constructor(private fb : FormBuilder, private cs : CommmonService){}

  ngOnInit()
  {
      this.enqform = this.fb.group(
        {
          "cid" : [],
          "firstName" : [],
          "lastName" : [],
          "mobileNo" : [],
          "dateofBirth" : [],
          "gender" : [],
          "age" : [],
          "panCard" : [],
          "address" : []
        }
      )
  }

  saveEnquiry(){
    console.log(this.enqform.value);
    this.cs.saveEnquiryData(this.enqform.value).subscribe();
  }

}
