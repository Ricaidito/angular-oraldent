import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, UserDto } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl: string = "https://localhost:44342/api/User";

  logIn(user: UserDto): Observable<User> {
    return this.http.post<User>(this.baseUrl + "/LogIn", user);
  }
}
