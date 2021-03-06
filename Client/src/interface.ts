export interface UserInterface {
  id: string;
  username: string;
  bio: string;
  isAdmin: boolean;
}

export interface IPost {
  username: string;
  date: string;
  _id: string
}