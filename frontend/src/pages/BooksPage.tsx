import React from "react";
import { useQuery } from "@apollo/client";
import { Book } from "../interfaces/Book";
import { GET_BOOKS } from "../apollo/queries";

export function BooksPage() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <div>
      {data.books.map((book: Book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
}
