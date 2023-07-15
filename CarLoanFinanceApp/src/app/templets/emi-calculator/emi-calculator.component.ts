import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommmonService } from 'src/app/shared/commmon.service';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EMICalculatorComponent implements OnInit {

  emiform : FormGroup;
  emiData : any;
  constructor(private fb : FormBuilder, private cs : CommmonService){}
  ngOnInit(): void {
    this.emiform = this.fb.group({
      "loan_Amount"  : [],
      "interest_rates" : [],
      "tenure" : [],
      "emi" : [],
      "interest_Amount" : [],
      "total_payable_Amount" : []
    })
  }

  emiCalculator()
  {
    console.log(this.emiform.value)
    this.cs.EmiCalculator(this.emiform.value).subscribe((response:any)=>{
      this.emiData = response;
    });
  }



}
