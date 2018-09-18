import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ForgotComponent } from './forgot/forgot.component';
import { AppRouteModule } from './app.route.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { EmailResetComponent } from './email-reset/email-reset.component';
import { MobileResetComponent } from './mobile-reset/mobile-reset.component';
import { NewpwdComponent } from './newpwd/newpwd.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MobileVerifyComponent } from './mobile-verify/mobile-verify.component';
import { ScreenNameComponent } from './screen-name/screen-name.component';
import { IntrestComponent } from './intrest/intrest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    ResetComponent,
    EmailResetComponent,
    MobileResetComponent,
    NewpwdComponent,
    PersonalDetailsComponent,
    MobileVerifyComponent,
    ScreenNameComponent,
    IntrestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouteModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
