import React, { useState } from 'react';
import axios from 'axios';

const BookForm = (props) => {

  const { addBook, id, setShowForm } = props

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formObj = {title: title, author: author}
    // let res = await axios.post('/books', formObj) <--- TODO MOVE THIS LOGIC TO APP.JS
    if(id){
      updateBook({title, author}, id)
      setShowForm(false)
    } else {
      addBook({title, author})
    }
    // addBook(res.data) <--- THIS LOGIC WILL ALSO MOVE, TODO
    setTitle('')
    setAuthor('')
    // console.log(res.data)
  }


  return(
    <>
      <form onSubmit={handleSubmit} >
        <h3>{id ? `Editing ${id}` : "Add Books Here"}</h3>
        <p>Title:</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <p>Author:</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <button type='submit'>{id ? 'Edit' : 'Add'}</button>
        {setShowForm && <button onClick={() => setShowForm(false)}>cancel</button>}
      </form>
    </>
  )
}

export default BookForm