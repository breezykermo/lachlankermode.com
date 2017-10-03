import React from 'react'
import { deduceUrl } from '../utils'
import { Book as Type_Book, Shelf as Type_Shelf } from '../types' // eslint-disable-line camelcase

const DeskDisplay = ({ book }) => {
  const url = deduceUrl(book)
  return (
    <a href={url} className="desk-book" target="_blank">
      <div className="details">
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </div>
    </a>
  )
}
DeskDisplay.propTypes = {
  book: Type_Book,
}

const Desk = ({ books }) => (
  <div className="desk-case">
    {books.map((book, id) => (
      <DeskDisplay key={id} book={book} />
    ))}
  </div>
)
Desk.propTypes = {
  books: Type_Shelf,
}

export default Desk
