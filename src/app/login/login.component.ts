import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor() {}

  isLogged: boolean = false;
  email: string = "";
  password: string = "";

  ngOnInit(): void {}

  logIn(): void {
    this.log(this.email);
    this.log(this.password);
    this.isLogged = !this.isLogged;
  }

  log(e: any): void {
    console.log(e);
  }
}
