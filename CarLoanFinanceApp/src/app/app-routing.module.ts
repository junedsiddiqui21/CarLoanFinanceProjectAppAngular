import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry/home/home.component';
import { AboutUsComponent } from './templets/about-us/about-us.component';
import { LocationComponent } from './templets/location/location.component';
import { ContactComponent } from './templets/contact/contact.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { LoginComponent } from './entry/login/login.component';
import { DashBoardComponent } from './entry/dash-board/dash-board.component';
import { EMICalculatorComponent } from './templets/emi-calculator/emi-calculator.component';
import { HomePageComponent } from './templets/home-page/home-page.component';
import { HomeHeaderComponent } from './templets/home-header/home-header.component';

const routes: Routes = [
  
  {
    path : '',component : HomeComponent,
<<<<<<< HEAD
    children : [
   
      {path : 'home', component :HomePageComponent },
=======
  children : [
>>>>>>> e278a6775bb5f48dd3a7cb3873e42bd4251f5df9
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
   ]
  }
   
<<<<<<< HEAD
  ]






=======
  ];



>>>>>>> e278a6775bb5f48dd3a7cb3873e42bd4251f5df9
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
