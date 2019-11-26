import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { PhoneComponent } from './contact/phone/phone.component';
import { ErrorComponent } from './error/error.component';
import {StudentuserComponent} from './studentuser/studentuser.component';

const routes: Routes = [{path:'Home',component:HomeComponent},
{path:'AboutUs',component:AboutComponent},
{path:'Contact',component:ContactComponent,
  children:[
  {path:'phone',component:PhoneComponent},
]},
{path:'Users',component:UsersComponent},
{path:'Student', component:StudentuserComponent},
{ path: '**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
