import { Component, OnInit } from '@angular/core';
import { CommmonService } from 'src/app/shared/commmon.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

constructor(private cs : CommmonService){}

enqData : any;
  ngOnInit(): void {
    this.cs.viewEnquiryData().subscribe((response:any)=>{
      this.enqData=response;
    })
  }



}
