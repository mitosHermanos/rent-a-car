import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms';
// import { MaterialModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
//import { JwtModule } from '@auth0/angular-jwt'
//import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert.component/alert.component';
import { HomeComponent } from './components/home/home.component';

import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { RentRequestComponent } from './components/rent-request/rent-request.component';
//import { AuthGuard } from './helpers/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    RegisterComponent,
    AlertComponent, 
    HomeComponent,
    AdminPageComponent,
    AdvertisementComponent,
    RentRequestComponent
   // AuthGuard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    // HttpModule,
    // JwtModule.forRoot({
    //   config: {
    //     authScheme: 'Bearer',
    //     headerName: 'Authorization',
    //     tokenGetter: () => {
    //       return localStorage.getItem('access_token');
    //     },
    //   }
    // }),
    // MaterialModule,            // <----- this module will be deprecated in the future version.
    // MatDatepickerModule,        // <----- import(must)
    // MatNativeDateModule,        // <----- import for date formating(optional)
    //MatMomentDateModule   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }