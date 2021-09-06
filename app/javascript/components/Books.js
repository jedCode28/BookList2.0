import React from 'react';
import Book from "./Book"

const Books = (props) => {
  const {books, deleteBook, updateBook} = props

  const renderBooks = () => {
    if (books.length == 0) {
      return <h1 className='no-mo'>NO MORE BOOKS FOR THE CHILDREN</h1>
    }
    return books.map( book => <Book updateBook={updateBook} deleteBook={deleteBook} key={book.id} {...book}  />)
  }

  return(
    <>
      {/* <div className='books-container'> */}
      <div>
        <h2 className='books-colon'>Books:</h2>
        {renderBooks()}
      </div>
    </>
  )
}

export default Books