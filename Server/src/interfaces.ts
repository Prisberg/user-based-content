export interface UserInterface  {
  username: string;
  email: string;
  bio: string;
  isAdmin: boolean;
  id: string;
}

export interface DbUserInterface {
  username: string;
  email: string;
  bio: string;
  password: string;
  isAdmin: boolean;
  _id: string;
}

export interface IPost {
  userId: string;
  userName: string;
  description: string;
  img?: string;
}

