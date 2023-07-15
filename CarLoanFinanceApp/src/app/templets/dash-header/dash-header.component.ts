import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent implements OnInit {

  userRole : String;
  user : any;

  ngOnInit(): void {

    let ut : string = sessionStorage.getItem('userType');
    // this.user = JSON.parse(ut);
  
    if(ut=='re')
    {
      this.userRole = 'Relationship Executive';
    }
    else if (ut=='oe')
    {
      this.userRole = 'Operational Executive';
    }
    else if(ut=='cm')
    {
      this.userRole = 'Credit Manager'
    }
    else if(ut=='ah')
    {
      this.userRole = 'Account Head'
    }
  }

}
