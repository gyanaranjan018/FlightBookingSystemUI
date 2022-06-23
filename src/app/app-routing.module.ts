import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './pages/add-airline/add-airline.component';
import { AddInventoryComponent } from './pages/add-inventory/add-inventory.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AirlineDetailsComponent } from './pages/airline-details/airline-details.component';
import { AirlinesComponent } from './pages/airlines/airlines.component';
import { BookFlightComponent } from './pages/book-flight/book-flight.component';
import { BookingDetailsAdminComponent } from './pages/booking-details-admin/booking-details-admin.component';
import { BookingDetailsComponent } from './pages/booking-details/booking-details.component';
import { DiscountCouponComponent } from './pages/discount-coupon/discount-coupon.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SearchFlightComponent } from './pages/search-flight/search-flight.component';
import { AdminAuthGuard } from './security/admin-auth-guard';
import { AuthGuard } from './security/auth-guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'user/login',
    component: LoginComponent
  },
  {
    path:'search',
    component: SearchFlightComponent
  },
  {
    path:'flight/book',
    component: BookFlightComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'flight/booking/:id',
    component: BookingDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'flight/bookings',
    component: MyBookingsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/login',
    component: AdminLoginComponent
  },
  {
    path:'admin/airlines',
    component: AirlinesComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path:'admin/airlines/add',
    component: AddAirlineComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path:'admin/airlines/:id',
    component: AirlineDetailsComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path:'airlines/inventory',
    component: AddInventoryComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path:'admin/coupons',
    component: DiscountCouponComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'admin/reports',
    component: ReportsComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path:'admin/flight/booking/:id',
    component: BookingDetailsAdminComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  HomeComponent,
  AdminLoginComponent,
  AddAirlineComponent,
  AirlinesComponent,
  AirlineDetailsComponent,
  AddInventoryComponent,
  DiscountCouponComponent,
  SearchFlightComponent,
  MyBookingsComponent
];
