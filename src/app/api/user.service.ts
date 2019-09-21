import { Injectable } from '@angular/core';
import { appt } from './appart'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  public getUser(): {"name":String, "area": String, 'price': String, "location": String}[] { // appartement service
    let appartement: {"name":String, "area": String, 'price': String, "location": String}[] = appt
    return appartement;
  }
}
