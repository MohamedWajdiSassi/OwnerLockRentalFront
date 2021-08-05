import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/_service/device.service';
import { Owner } from 'src/app/model/Owner.model';
import { TokenService } from 'src/app/_service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  owner :Owner;
  constructor( private authService: AuthService, private tokenService: TokenService,private router : Router, private deviceService : DeviceService) { }

  ngOnInit(): void {
   // this.onSubmit();
   
  }

   onSubmit(f:any): void {
    const email =f.value;
    const password = f.value;
    console.log(f)
    console.log(email)
    console.log(password)
    this.authService.login(email).pipe().subscribe(data => {
      this.tokenService.saveToken(data.accessToken);   
      console.log("token :"+data.accessToken);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.router.navigateByUrl('/dashboard');
      this.tokenService.getToken('auth-token')
    },
    err => {
      console.log(err.error.message)
    });   
  }
  reloadPage(): void {
    window.location.reload();
  }
  getToken(){}

}
