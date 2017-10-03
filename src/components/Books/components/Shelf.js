import React from 'react'
import { deduceUrl } from '../utils'
import { Book as Type_Book, Shelf as Type_Shelf } from '../types' // eslint-disable-line camelcase

const ShelfDisplay = ({ book }) => {
  const url = deduceUrl(book)
  return (
    <a href={url} className="shelf-book" target="_blank">
      <div className="author">{book.author}</div>
      <div className="title">{book.title}</div>
    </a>
  )
}
ShelfDisplay.propTypes = {
  book: Type_Book,
}

const Shelf = ({ books }) => (
  <div className="shelf-case">
    {books
      .sort((a, b) => {
        const aSplit = a.author.split(' ')
        const bSplit = b.author.split(' ')
        const lastA = aSplit[aSplit.length-1]
        const lastB = bSplit[bSplit.length-1]
        if (lastA < lastB) return -1
        else if (lastA > lastB) return 1
        else {
          return 0
        }
      })
      .map((book, id) => (
        <ShelfDisplay key={id} book={book} />
      ))
    }
  </div>
)
Shelf.propTypes = {
  books: Type_Shelf,
}

export default Shelf
