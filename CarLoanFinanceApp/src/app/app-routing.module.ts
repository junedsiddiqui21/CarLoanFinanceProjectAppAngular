import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry/home/home.component';
import { HomeHeaderComponent } from './templets/home-header/home-header.component';
import { AboutUsComponent } from './templets/about-us/about-us.component';
import { LocationComponent } from './templets/location/location.component';
import { ContactComponent } from './templets/contact/contact.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { LoginComponent } from './entry/login/login.component';
import { DashBoardComponent } from './entry/dash-board/dash-board.component';
import { EMICalculatorComponent } from './templets/emi-calculator/emi-calculator.component';

const routes: Routes = [
  

<<<<<<< HEAD
  {
    path : '',component : HomeComponent,children : [
=======
  {path : '',component : HomeComponent,
  children : [
    

   
>>>>>>> 6a547774ebef2443d7491cd0fdb0932f99cd289a
      {path : 'aboutus', component : AboutUsComponent},
      {path : 'location', component : LocationComponent},
      {path : 'contact', component : ContactComponent},
      {path : 'enquiry' , component : EnquiryComponent},
      {path : 'login' , component : LoginComponent},
      {path : 'emi', component : EMICalculatorComponent} 
    ]
  },
  { path : 'dashboard' ,component : DashBoardComponent,
   children : [
    {
      path : 're' , loadChildren:()=>import('src/app/modules/re/re.module').then(m=>m.ReModule)
    },
    {
      path : 'oe', loadChildren:()=>import('src/app/modules/oe/oe.module').then(m=>m.OeModule)
    },
    {
      path : 'cm' , loadChildren:()=>import('src/app/modules/cm/cm.module').then(m=>m.CmModule)
    },
    {
      path : 'ah', loadChildren:()=>import('src/app/modules/ah/ah.module').then(m=>m.AhModule)
    }
   ]},
   
<<<<<<< HEAD
  ]
=======
  ];
  
>>>>>>> 6a547774ebef2443d7491cd0fdb0932f99cd289a





<<<<<<< HEAD

=======
>>>>>>> 6a547774ebef2443d7491cd0fdb0932f99cd289a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
