// ReadingList.js

import React from 'react';
import Book from './Book';

const ReadingList = (props) => {
  const handleRemoveFromReadingList = (book) => {
    props.onRemoveFromReadingList(book);
  };

  return (
    <div className="reading-list">
      <h2>My Reading List</h2>
      {props.readingList.length === 0 ? (
        <p>Your reading list is empty. Add some books!</p>
      ) : (
        props.readingList.map((book) => (
          <Book
            key={book.id}
            book={book}
            isReadingList={true}
            onRemoveFromReadingList={handleRemoveFromReadingList}
          />
        ))
      )}
    </div>
  );
};

export default ReadingList;
