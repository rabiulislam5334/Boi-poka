import React from "react";
import { Link, useLoaderData } from "react-router";
import BookCard from "./BookCard";

const Book = () => {
  const { data } = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((book) => (
        <BookCard key={book.bookId} book={book}></BookCard>
      ))}
    </div>
  );
};

export default Book;
