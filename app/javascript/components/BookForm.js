import React from 'react';

const BookForm = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit clicked")
  }


  return(
    <>
      <h1>Book Form</h1>
      <form onSubmit={handleSubmit} >
        <p>Title:</p>
        <input />
        <p>Author:</p>
        <input />
        <button type='submit'>Add This Book</button>
      </form>
    </>
  )
}

export default BookForm