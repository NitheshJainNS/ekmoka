import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { EmailResetComponent } from './email-reset/email-reset.component';
import { MobileResetComponent } from './mobile-reset/mobile-reset.component';
import { NewpwdComponent } from './newpwd/newpwd.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MobileVerifyComponent } from './mobile-verify/mobile-verify.component';
import { ScreenNameComponent } from './screen-name/screen-name.component';
import { IntrestComponent } from './intrest/intrest.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRouter: Routes = [
  // {
  //   path: 'app',
  //   component:AppComponent,
  //   children:[{
  //     path:'greet',
  //     component:GreetComponent
  //   }]
  // }
  // {
  //   path:'',
  //   redirectTo:'app',
  //   pathMatch:'full'
  // },
  // {
  //   path:'**',
  //   component: PageNotFoundComponent
  // },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: 'reset',
    component: ResetComponent
  },
  {
    path: 'emailreset',
    component: EmailResetComponent
  },
  {
    path: 'mobilereset',
    component: MobileResetComponent
  },
  {
    path: 'newpwd',
    component: NewpwdComponent
  },
  {
    path: 'personaldetails',
    component: PersonalDetailsComponent
  },
  {
    path: 'mobileverify',
    component: MobileVerifyComponent
  },
  {
    path: 'screenname',
    component: ScreenNameComponent
  },
  {
    path: 'intrest',
    component: IntrestComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)],
  exports: [
    RouterModule
  ],
  providers: [
  ],
  declarations: [
  PageNotFoundComponent]
})
export class AppRoutingModule { }
