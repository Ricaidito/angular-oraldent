import { Component, OnInit } from "@angular/core";
import { UserDto } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  user: UserDto = { email: "", password: "" };
  isLogged: boolean = false;

  ngOnInit(): void {}

  logIn(): void {
    this.userService.logIn(this.user).subscribe((res) => {
      if (res.name == "404") {
        this.isLogged = false;
        this.throwAlert();
      } else {
        this.isLogged = true;
      }
    });
  }

  throwAlert(): void {
    alert("Creedenciales incorrectas! Intente nuevamente...");
    this.user.email = "";
    this.user.password = "";
  }

  log(e: any): void {
    console.log(e);
  }
}
