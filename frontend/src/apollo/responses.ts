import { Book } from "../interfaces/Book";
import { User } from "../interfaces/User";

export interface AuthResponse extends User {
  token: string;
}

export interface BooksResponse {
  books: Book[];
}

export interface UsersResponse {
  users: User[];
}
