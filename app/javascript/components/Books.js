import React from 'react';
import Book from "./Book"

const Books = (props) => {
  const {books, deleteBook, updateBook} = props

  const renderBooks = () => {
    if (books.length == 0) {
      return <h1>NO MORE BOOKS FOR THE CHILDREN</h1>
    }
    return books.map( book => <Book updateBook={updateBook} deleteBook={deleteBook} key={book.id} {...book}  />)
  }

  return(
    <div>
      <h1>Books:</h1>
      {renderBooks()}
    </div>
  )
}

export default Books