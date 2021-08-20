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

  const updateBook = async(bookObj, id) => {
    try{
      let res = await axios.put(`/books/${id}`, bookObj)
      let updateBooks = books.map(i => i.id !== id ? i : res.data)
      setBooks(updateBooks)
    }catch(err){
      handleErr(err)
    }
  }

  const deleteBook = (id) => {
    const filteredBooks = books.filter( book => {
      return book.id !== id
    })
    setBooks(filteredBooks)
  }

  return(
    <div>
      <h1>Books.com</h1>
      <button onClick={getBooks}>See the Books</button>
      <BookForm addBook={addBook}/>
      <Books books={books} deleteBook={deleteBook} updateBook={updateBook} />
    </div>
  )
}

export default App