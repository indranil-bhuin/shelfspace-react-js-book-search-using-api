// // Book.js
// import React from 'react';

// const Book = ({ book, onAddToReadingList }) => {
//   const { title, authors, description, imageLinks } = book.volumeInfo;
//   const imageUrl = imageLinks ? imageLinks.thumbnail : '';

//   return (
//     <div className="book-card">
//       <img className="book-card-img" src={imageUrl} alt={title} />
//       <div className="book-card-details">
//         <h2 className="book-card-title">{title}</h2>
//         <h3 className="book-card-author">{authors}</h3>
//         <p className="book-card-description">{description}</p>
//         <div className="book-card-actions">
//           <button onClick={() => onAddToReadingList(book)}>Add to Reading List</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Book;

// import React from 'react';

// const Book = (props) => {
//   const handleAddToReadingList = () => {
//     props.onAddToReadingList(props.book);
//   };

//   const handleRemoveFromReadingList = () => {
//     props.onRemoveFromReadingList(props.book);
//   };

//   return (
//     <div className="book">
//       <img src={props.book.imageLinks?.thumbnail} alt={props.book.title} />
//       <h2>{props.book.title}</h2>
//       <p>by {props.book.authors?.join(', ')}</p>
//       {props.isReadingList ? (
//         <button onClick={handleRemoveFromReadingList}>Remove from Reading List</button>
//       ) : (
//         <button onClick={handleAddToReadingList}>Add to Reading List</button>
//       )}
//     </div>
//   );
// };

// export default Book;

import React from 'react';
import './book.css'


const Book = (props) => {
  const handleAddToReadingList = () => {
    props.onAddToReadingList(props.book);
  };

  const handleRemoveFromReadingList = () => {
    props.onRemoveFromReadingList(props.book);
  };

  return (
    <div className="book">
      <img className="book-cover book-card-img" src={props.book.imageLinks?.thumbnail} alt={props.book.title} />
      <h2 className="book-card-title">{props.book.title}</h2>
      <p className="book-card-author">by {props.book.authors?.join(', ')}</p>
      {props.isReadingList ? (
        <button className="book-action-btn btn btn-danger" onClick={handleRemoveFromReadingList}>Remove from Reading List</button>
      ) : (
        <button className="book-action-btn btn btn-success" onClick={handleAddToReadingList}>Add to Reading List</button>
      )}
    </div>
  );
};

export default Book;
