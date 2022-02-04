import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrlApi = 'https://ipcc-core.herokuapp.com/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient
  ) { }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrlApi + 'rol');
  }

  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.baseUrlApi + 'rol', role, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRole (role: Role): Observable<Role> {
    return this.http.put<Role>(this.baseUrlApi + 'rol', role, this.httpOptions);
  }

  deleteRole (id: number | number): Observable<unknown> {
    const url = `${this.baseUrlApi}rol/${id}/`;
    return this.http.delete(url, this.httpOptions);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrlApi + 'usuario');
  }

  addUser(usuario: User): Observable<User> {
    return this.http.post<User>(this.baseUrlApi + 'usuario', usuario, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser (usuario: User): Observable<User> {
    return this.http.put<User>(this.baseUrlApi + 'usuario', usuario, this.httpOptions);
  }

  deleteUser (id: number | number): Observable<unknown> {
    const url = `${this.baseUrlApi}usuario/${id}/`;
    return this.http.delete(url, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
