import { YoutubeComponent } from './youtube/youtube.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'customers',component: AdminComponent},
  {path: 'home', component: HomeComponent },
  {path :'contacts', component: ContactComponent},
  {path :'youtube', component: YoutubeComponent},
  {path:'about',component: AboutComponent},
  {path:'signup', component:SigninComponent},
  {path:'',component:SignupComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports:[RouterModule]
})
export class AppRoutingModule { }
