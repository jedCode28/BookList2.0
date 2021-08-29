import axios from 'axios';
import React, {useState} from 'react';
import BookForm from './BookForm';

const Book = (props) => {

  const { id, title, author, deleteBook, updateBook } = props

  const [showForm, setShowForm] = useState(false)

  const deleteHandler = async (id) => {
    let res = await axios.delete(`/books/${id}`)
    deleteBook(res.data.id)
  }

  const renderBook = () => {
    return (
      <>
        <div className='book-header'>
          <h1>
            {id} - {title}
          </h1>
          <h4>By - {author}</h4>
        </div>
        <div className='book-footer'>
          <p className='delete' onClick={() => deleteHandler(id)}>delete</p>
          <p className='delete' onClick={() => setShowForm(true)}>edit</p>
        </div>
      </>
    )
  }
  
  return(
    <div className='book-container'>
      {!showForm && renderBook()}
      {showForm && <BookForm id={id} updateBook={updateBook} setShowForm={setShowForm} title={title} author={author} />}
    </div>
  )
}

export default Book