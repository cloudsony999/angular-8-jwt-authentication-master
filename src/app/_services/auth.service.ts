import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8888/user/';
const REGISTER_API = 'http://localhost:8888/secure/';
// const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      userName: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post<any>(REGISTER_API + 'registeremployee', {
      userId:101,
      name:"Amitava Chatterjee",
      gender:"male",
      address:"Kolkata",
      email:user.email,
      userName:user.username,
      password:user.password
    }, httpOptions);
  }
}
