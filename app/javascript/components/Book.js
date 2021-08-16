import axios from 'axios';
import React from 'react';

const Book = (props) => {

  const { title, author, id, deleteBook } = props

  const deleteHandler = async (id) => {
    let res = await axios.delete(`/books/${id}`)
    deleteBook(res.data.id)
  }

  return(
    <div>
      <h1>
        {id} - {title}
        <span onClick={() => deleteHandler(id)}>delete</span>
      </h1>
      <p>{author}</p>
    </div>
  )
}

export default Book