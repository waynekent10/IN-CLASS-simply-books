import React, { useEffect, useState } from 'react';
import { booksOnSale } from '../../api/bookData';
import BookCard from '../../components/BookCard';
import { useAuth } from '../../utils/context/authContext';

export default function BookonSale() {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);

  const getBooksOnSale = () => {
    booksOnSale(user.uid).then(setBooks);
  };
  useEffect(() => {
    getBooksOnSale();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.firebasekey} bookObj={book} onUpdate={getBooksOnSale} />
      ))}
    </div>
  );
}
