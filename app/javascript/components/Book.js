import React from 'react';

const Book = (props) => {

  const { title, author, id } = props

  return(
    <div>
      <h1>
        {id} - {title}
      </h1>
      <p>{author}</p>
    </div>
  )
}

export default Book