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

  return(
    <div>
      <h1>App</h1>
      <button onClick={getBooks}>See the Books</button>
      <BookForm />
      <Books books={books} />
    </div>
  )
}

export default App