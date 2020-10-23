import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  login: string = '';
  password: string = '';
  isAuth: boolean = false;

  constructor(public authService: AuthServiceService) { }

  ngOnInit(): void {
    this.isAuth =  this.authService.isAuthenticated()
  }

  auth(){
    this.authService.login(this.login, this.password);
  }

  disconnected(){
    this.authService.disconnected();
    this.isAuth = false;
  }

}
