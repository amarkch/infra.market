import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {libraryData, initializeData, BookIssueTrans} from "./libraryData";
function App() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [trans, setTrans] = useState([]);
  const [dueDate, setDueDate] = useState("");
  const [transBookId, setTransBookId] = useState(-1);
  const [transUserId, setTransUserId] = useState(-1);
  useEffect(() => {
    const {books, users} = initializeData();
    setBooks(books);
    setUsers(users);
  }, []);
  const saveTransBookId = (e) => {
    setTransBookId(e.target.value);
  }
  const saveTransUserId = (e) => {
    setTransUserId(e.target.value);
  }
  const getValidation = (book_id, user_id) => {
    let bk = 0;
    let usr = 0;
    for(let i=0;i<trans.length;i++) {
      if(trans.book_id == book_id) {
        bk++;
      }
      if(trans.user_id == user_id) {
        usr++;
      }
    }
    return {availableCopy: bk, holdingBook: usr};
  }
  const issueBook = () => {
    const theBook = books.filter(filterBookById);
    const theUser = users.filter(filterUserById);
    if(theBook.length && theUser.length) {
      const {availableCopy, holdingBook} = getValidation(theBook.id, theUser.id);
      if(availableCopy < theBook.totalCopy && holdingBook < 3) {
        const transaction  = new BookIssueTrans(theBook.id, theUser.id, dueDate)
        trans.push(transaction);
        console.log(transaction);
      }
    }
  }

  const saveDueDate = (e) => {
    setDueDate(Date.parse(e.target.value));
  }

  const filterUserById = (data) => {
    return data.id == transUserId;
  }

  const filterBookById = (data) => {
    return data.id == transBookId;
  }

  return (
    <div className="App">
      <div className="book_and_user">
        <div className="card">
          <h3>Books</h3>
          {
            books.map((book, idx) => {
              return <div className="li" key={book.id}>{book.title}</div>
            })
          }
        </div>
        <div className="card">
          <h3>Users</h3>
          {
            users.map((user, idx) => {
              return <div className="li" key={user.user_id}>{user.name}</div>
            })
          }
        </div>
      </div>
      <div className="trans">
        Book Id:
        <input onChange={saveTransBookId}/>
        <br />
        User Id:
        <input onChange={saveTransUserId}/>
        <br/>
        Due Date:
        <input onChange={saveDueDate}/>
        <br/>
        <button onClick={() => issueBook()}>Issue Book</button>
      </div>
    </div>
  );
}

export default App;
