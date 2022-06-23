import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  handleError = (data: HttpErrorResponse) => {
    var errors = data.error;
    var message = '';
    if (typeof errors === 'string') {
      message = errors;
    } else if (errors instanceof Array) {
      errors.forEach((error) => (message += error.message + '\n'));
    }
    alert(message);
  };
}