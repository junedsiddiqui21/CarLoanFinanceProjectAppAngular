import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { GetCibilComponent } from './get-cibil/get-cibil.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { SuccessMailComponent } from './success-mail/success-mail.component';
import { RejectMailComponent } from './reject-mail/reject-mail.component';

const routes: Routes = [
  {path : 'view_enquiry',component : ViewEnquiryComponent},
  {path : 'req_cibil',component : GetCibilComponent},
  {path : 'apply_loan', component : ApplyLoanComponent},
  {path : 'success_mail', component : SuccessMailComponent},
  {path : 'reject_mail',component : RejectMailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
