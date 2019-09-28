import { Component, OnInit } from '@angular/core';
import {UserService} from '../api/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  appartements:{"name":String, "area": String, 'price': String, "location": String}[];
  name: String = '';
  src: String;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.appartements = this.userService.getUser();
    this.src = "../assets/image.png";
  }
  public showName(): void {
    console.log(this.name)
  }

}
