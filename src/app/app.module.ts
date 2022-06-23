import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ValidatorComponent } from './components/validator/validator.component';
import { LoaderButtonComponent } from './components/loader-button/loader-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AirlinesComponent } from './pages/airlines/airlines.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AddAirlineComponent } from './pages/add-airline/add-airline.component';
import { AirlineDetailsComponent } from './pages/airline-details/airline-details.component';
import { AdminAuthGuard } from './security/admin-auth-guard';
import { AuthGuard } from './security/auth-guard';
import { AddInventoryComponent } from './pages/add-inventory/add-inventory.component';
import { DiscountCouponComponent } from './pages/discount-coupon/discount-coupon.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { SearchFlightComponent } from './pages/search-flight/search-flight.component';
import { AirlineBodyComponent } from './components/airline-body/airline-body.component';
import { AirlineHeaderComponent } from './components/airline-header/airline-header.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { FinalAmountPipe } from './pipes/final-amount.pipe';
import { AmountPipe } from './pipes/amount.pipe';
import { BookFlightComponent } from './pages/book-flight/book-flight.component';
import { BookingDetailsComponent } from './pages/booking-details/booking-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { BookingDetailsAdminComponent } from './pages/booking-details-admin/booking-details-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ValidatorComponent,
    LoaderButtonComponent,
    LoginComponent,
    AdminLoginComponent,
    AirlinesComponent,
    AdminNavbarComponent,
    AddAirlineComponent,
    AirlineDetailsComponent,
    AddInventoryComponent,
    DiscountCouponComponent,
    UserNavbarComponent,
    SearchFlightComponent,
    AirlineBodyComponent,
    AirlineHeaderComponent,
    MyBookingsComponent,
    DiscountPipe,
    FinalAmountPipe,
    AmountPipe,
    BookFlightComponent,
    BookingDetailsComponent,
    PageNotFoundComponent,
    ReportsComponent,
    BookingDetailsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
