import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReRoutingModule } from './re-routing.module';
import { GetCibilComponent } from './get-cibil/get-cibil.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { SuccessMailComponent } from './success-mail/success-mail.component';
import { RejectMailComponent } from './reject-mail/reject-mail.component';


console.log('In RE module..!')
@NgModule({
  declarations: [
    GetCibilComponent,
    ViewEnquiryComponent,
    ApplyLoanComponent,
    SuccessMailComponent,
    RejectMailComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule
  ]
})
export class ReModule { }
