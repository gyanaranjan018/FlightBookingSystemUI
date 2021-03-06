import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthModel } from '../models/authModel';
import { apiUrl, apiUrls } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login = (authModel: AuthModel): Observable<string> => {
    return this.httpClient.post<string>(apiUrl + apiUrls.userLogin, authModel);
  };

  register = (authModel: AuthModel) => {
    return this.httpClient.post(apiUrl + apiUrls.userRegister, authModel);
  };

  adminLogin = (authModel: AuthModel): Observable<string> => {
    return this.httpClient.post<string>(apiUrl + apiUrls.adminLogin, authModel);
  };

  isLoggedIn = (): boolean => {
    return localStorage['fb_user_token'] != undefined;
  };

  isAdminLoggedIn = (): boolean => {
    return localStorage['fb_admin_token'] != undefined;
  };

  logOut = () => {
    localStorage.removeItem('fb_user_token');
  };

  adminLogOut = () => {
    localStorage.removeItem('fb_admin_token');
  };
}