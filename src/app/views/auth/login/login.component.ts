import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/_service/device.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService, private router : Router, private deviceService : DeviceService) { }

  ngOnInit(): void {
  }

   onSubmit(f: any): void {
    const {email , password} = f.value 
    console.log(f)
    console.log(email)
    console.log(password)
    this.authService.login(email, password).pipe().subscribe()
  }

}
