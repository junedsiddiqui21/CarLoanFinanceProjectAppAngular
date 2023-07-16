import { Component } from '@angular/core';
import { CommmonService } from 'src/app/shared/commmon.service';

@Component({
  selector: 'app-get-cibil',
  templateUrl: './get-cibil.component.html',
  styleUrls: ['./get-cibil.component.css']
})
export class GetCibilComponent {

  constructor(private cs : CommmonService){}

enqData : any;
  ngOnInit(): void {
    this.cs.viewEnquiryData().subscribe((response:any)=>{
      this.enqData=response;
    })
  }

}
