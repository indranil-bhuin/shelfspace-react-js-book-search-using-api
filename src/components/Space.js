// App.js

import React, { useState } from 'react';
import Search from './Search';
import ReadingList from './ReadingList';
import '../styles/styles.css';

const App = () => {
  const [readingList, setReadingList] = useState([]);

  const handleAddToReadingList = (book) => {
    const newBook = {
      id: book.id,
      title: book.title,
      authors: book.authors,
      imageLinks: book.imageLinks,
    };
    setReadingList((readingList) => [...readingList, newBook]);
  };

  const handleRemoveFromReadingList = (book) => {
    setReadingList((readingList) => readingList.filter((item) => item.id !== book.id));
  };

  return (
    <div className="app">
      <Search onAddToReadingList={handleAddToReadingList} />
      <ReadingList
        readingList={readingList}
        onRemoveFromReadingList={handleRemoveFromReadingList}
      />
    </div>
  );
};

export default App;
