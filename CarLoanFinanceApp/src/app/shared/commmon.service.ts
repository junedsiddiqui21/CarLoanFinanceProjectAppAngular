import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommmonService {

  constructor(private http : HttpClient) { }

  // ------- user login -----

  getUserLoginData(username : string, password : string)
  {
      return this.http.get('http://localhost:9090/user/get/'+username+"/"+password);
  }

  // -------- Calculator  -------

  EmiCalculator(e:any)
  {
    return this.http.post('http://localhost:9090/emi_calculate',e);
  }

  // -------  Save Enquiry  ------

  saveEnquiryData(enquiry:any)
  {
    return this.http.post('http://localhost:9090/Enquiry/SaveEnquiry',enquiry);
  }

  viewEnquiryData()
  {
    return this.http.get('http://localhost:9090/Enquiry/GetEnquiry');
  }

  // --------- check Cibil ---------

  getCibilScore(cid:number)
  {
    return this.http.get('http://localhost:9090/Enquiry/CheckCIBIL/'+cid);
  }

  getSingleEnquiry(cid:number)
  {
    return this.http.get('http://localhost:9090/Enquiry/singleEnquiry/'+cid);
  }

  getForwerdedformData(cid:number){
    return this.http.get('http://localhost:9090/Enquiry/forwarded/'+cid);
  }

  getForwardFormBYSatus(forwardStatus:string){
    return this.http.get('http://localhost:9090/Enquiry/getForwardForm/'+forwardStatus);
  }



  




}
