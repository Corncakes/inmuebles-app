import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        console.log('Token: ' + data.token);
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
      }
    );;
  }

}
