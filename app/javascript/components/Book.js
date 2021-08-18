import axios from 'axios';
import React from 'react';

const Book = (props) => {

  const { title, author, id, deleteBook } = props

  const deleteHandler = async (id) => {
    let res = await axios.delete(`/books/${id}`)
    deleteBook(res.data.id)
  }

  return(
    <>
      <div className='book-header'>
        <h1>
          {id} - {title}
        </h1>
        <h4>By - {author}</h4>
      </div>
      <div className='book-footer'>
        <p onClick={() => deleteHandler(id)}>delete</p>
      </div>
    </>
  )
}

export default Book