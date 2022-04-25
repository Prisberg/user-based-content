export interface UserInterface  {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface DbUserInterface {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  _id: string;
}