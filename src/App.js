import React from 'react';
import { useState } from 'react'
import './App.css';

export function App(props) {
  const initialState = {id:"", bookName:"", author:""};
  const initialBooks = [{id:1, bookName:"Java", author:"TEST"}, {id:2, bookName:"Python", author:"TEST 123"}];
  const booksData = [];
  const [book, setBook] = useState(initialState);
  const [books, setBooks] = useState(booksData);
  const submitForm = (event) => {
    event.preventDefault();
    console.log('****** books' , books);
    book.id = Math.random();
    console.log('****** book ', book)
    setBooks([...books, book])
    console.log('****** books' , books);
  }
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };
  return (
    <div className='App'>
        <div className="container">
          <div className="formSection">
            <form name="bookForm" onSubmit={submitForm}>
              <div>
                <input type="text" placeholder="Enter Book Name" name="bookName" id="bookId" value={book.bookName || ''} onChange={inputHandler} />
              </div>
              <div>
                <input type="text" placeholder="Enter Author Name" name="author" id="author" value={book.author || ''} onChange={inputHandler}/>
              </div>
              <button type="submit">Submit</button>            
            </form>
          </div>
          <div className="displaySection">
          <table className="table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {
          books.length > 0 &&
          books.map((book) => (
            <tr key={book.id}>
              <td>{book.bookName}</td>
              <td>{book.author}</td>
            </tr>
          ))
          }
        {
          books.length === 0 && (
            <tr><td className="text-center">No books found</td></tr>
          )}
        </tbody>
      </table>
          </div>
        </div>
    </div>
  );
}

export default App;
