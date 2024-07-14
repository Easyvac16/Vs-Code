import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized: boolean = false;

  private loginUser: string = "";

  private passwordUser: string = "";

  constructor() {
    this.loginUser = "abc";
    this.passwordUser = "123abc";
  }

  public login(login: string, password: string): boolean {
    if (login == this.loginUser &&
      password == this.passwordUser) {
      this.isAuthorized = true;
    }

    return this.isAuthorized;
  }

  public logout(): void {
    this.isAuthorized = false;
  }

  public getAuthStatus(): boolean {
    return this.isAuthorized;
  }
}
