import c from "./ShopBooks.module.scss";
import booksData from "../../../data/books-data.json";
import ShopBookCard from "./ShopBookCard/ShopBookCard";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  maxBookPrice,
  selectAuthorFilter,
  selectPriceFilter,
  selectTitleFilter,
} from "../../../redux/slices/filterBookSlice.slice";

const ShopBooks = () => {
  //Pagination logic
  const { pageId } = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 20;

  const navigate = useNavigate();

  useEffect(() => {
    if (pageId && parseInt(pageId) !== currentPage) {
      setCurrentPage(parseInt(pageId));
    } else if (pageId && parseInt(pageId) > totalPages) {
      navigate("/shop/page/1"); // if url is not valid navigate to first page (page/9999)
    }
  }, [pageId, currentPage]);

  //Filter books by title (Search Input),by price, by author
  const titleFilter = useSelector(selectTitleFilter);
  const priceFilter = useSelector(selectPriceFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const filteredBooks = booksData.filter((book) => {
    const matchedTitle = book.name
      .toLowerCase()
      .includes(titleFilter.title.toLowerCase());

    const matchedPrice = book.price < priceFilter.price;
    const matchedAuthor = authorFilter.author.length
      ? authorFilter.author.includes(book.author)
      : true;
    return matchedTitle && matchedPrice && matchedAuthor; // true true true in initial
  });

  // console.log(filteredBooks);
  // console.log(titleFilter);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const slicedBooksData = filteredBooks.slice(
    indexOfFirstBook,
    indexOfLastBook
  );

  const totalPages = Math.ceil(booksData.length / booksPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/shop/page/${page}`); // Navigate to the new page
  };

  return (
    <>
      <div className={c.books}>
        {slicedBooksData.map((book, i) => (
          <ShopBookCard {...book} key={i} />
        ))}
      </div>
      <div className={c.pagination}>
        <ul>
          {/* if search filter field isn't empty disable pagination */}
          {titleFilter.title.length > 0 ||
            priceFilter.price !== maxBookPrice ||
            authorFilter.author.length !== 0 ||
            pageNumbers.map((page, i) => (
              <li
                onClick={() => handlePageChange(page)}
                className={currentPage === page ? c.active_page : ""}
                key={i}
              >
                {page}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ShopBooks;
