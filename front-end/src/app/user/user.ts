export interface IUser {
  id: number;
  userName: string;
  password: string;
  email: string;
}

export class User implements IUser {
  id: number;
  userName: string;
  password: string;
  email: string;

  setId(id: number): void {
    this.id = id;
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  setEmail(enail: string): void {
    this.email = this.email;
  }
}
