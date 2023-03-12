// Search.js

import React, { useState } from 'react';
import Book from './Book';

const Search = (props) => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setBooks(data.items);
  };

  const handleAddToReadingList = (book) => {
    props.onAddToReadingList(book);
  };

  return (
    <div className="search">
      <h2>Search for your favourite book</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Search for a book or Author..." className='form-control'/>
        <button type="submit" className='btn btn-primary'>Search</button>
      </form>
      <div className="search-results">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book.volumeInfo}
            isReadingList={false}
            onAddToReadingList={handleAddToReadingList}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
