import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { author, bookId, bookName, category, image, publisher, rating, tags } =
    book;
  return (
    <Link to={`/book_details/${bookId}`}>
      <div>
        <div className="border border-gray-100 p-8 shadow rounded-2xl">
          <div className="bg-gray-200 py-10 rounded-2xl">
            <img src={image} alt="" className=" w-[120px] h-40 mx-auto" />
          </div>
          <div>
            <div className="mt-4 flex justify-between">
              <button className="btn btn-active rounded-2xl">{tags[0]}</button>
              <button className="btn btn-active rounded-2xl">{tags[1]}</button>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold">{bookName}</h1>
              <p>by: {author}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="btn btn-active rounded-2xl">{category}</button>
              <button className="btn  btn-active rounded-2xl">
                <FaRegStar />
                {rating}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
