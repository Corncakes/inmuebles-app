import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrlApi = 'https://ipcc-core-test.herokuapp.com/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrlApi + 'token', {
      'user': username,
      'password': password
    }, this.httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrlApi + 'api/users', {
      username,
      email,
      password
    }, this.httpOptions);
  }
}
