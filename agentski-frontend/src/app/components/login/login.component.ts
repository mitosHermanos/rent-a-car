import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/LoginUser';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser;
  myInput: string;
  email: string;
  password: string;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.email);
    console.log(this.password);
    
    this.loginUser = {email: this.email, password: this.password};
    console.log(this.loginUser);

    this.loginService.onLogin(this.loginUser).subscribe((data:LoginUser)=>{
      console.log(data);
    });
  }

}
