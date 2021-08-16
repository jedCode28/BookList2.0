import React, { useState } from 'react';
import Books from "./Books";
import axios from 'axios';
import BookForm from './BookForm';

const App = (props) => {

  const handleErr = (error) => {
    console.log(error)
    alert('error in axios call')
  }

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const getBooks = async () => {
    try{
    let res = await axios.get("/books")
    console.log(res.data)
    setBooks(res.data)
    } catch(err){
      handleErr(err)
      setLoading(false)
    }

  }

  const addBook = (book) => {
    setBooks([...books, book])
  }

  const deleteBook = (id) => {
    const filteredBooks = books.filter( book => {
      return book.id !== id
    })
    setBooks(filteredBooks)
  }

  return(
    <div>
      <h1>App</h1>
      <button onClick={getBooks}>See the Books</button>
      <BookForm addBook={addBook}/>
      <Books books={books} deleteBook={deleteBook} />
    </div>
  )
}

export default App