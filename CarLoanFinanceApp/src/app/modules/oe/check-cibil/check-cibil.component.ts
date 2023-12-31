import { Component } from '@angular/core';
import { CommmonService } from 'src/app/shared/commmon.service';

@Component({
  selector: 'app-check-cibil',
  templateUrl: './check-cibil.component.html',
  styleUrls: ['./check-cibil.component.css'],
 

})
export class CheckCibilComponent {

  constructor(private cs : CommmonService){}

  enqData : any;
    ngOnInit(): void {
      this.cs.viewEnquiryData().subscribe((response:any)=>{
        this.enqData=response;
      })
    }

    

    forwardform : any;
    getForwerdedData(forwardStatus:string)
    {
      this.cs.getForwardFormBYSatus(forwardStatus).subscribe((response:any)=>{
        this.forwardform = response;
       
      })
      
    }

    cibilScore : any;

getCibil(cid:number)
{
  alert("check Cibil")
  this.cs.getCibilScore(cid).subscribe((response:any)=>{
    this.cibilScore = response;
    window.location.reload();
  });
}



}
