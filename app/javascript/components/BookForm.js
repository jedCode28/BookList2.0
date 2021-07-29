import React, { useState } from 'react';
import axios from 'axios';

const BookForm = (props) => {

  const { addBook } = props

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const bookObj = {title: title, author: author}
    let res = await axios.post('/books', bookObj)
    addBook(res.data)
    setTitle('')
    setAuthor('')
    // console.log(res.data)
  }


  return(
    <>
      <h1>Book Form</h1>
      <form onSubmit={handleSubmit} >
        <p>Title:</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <p>Author:</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <button type='submit'>Add This Book</button>
      </form>
    </>
  )
}

export default BookForm