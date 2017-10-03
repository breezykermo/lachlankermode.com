// @flow
import type { _Book, _Shelf } from './types'

// This is a simulation of Elm's Result Http.Error Shelf class.
// A polymorphic Result class is more difficult to implement.
class ShelfResult {
  shelf: _Shelf;
  error: ?string
  constructor (shelf: _Shelf, error: ?string) {
    this.shelf = shelf
    this.error = error
  }
}

export function shelfDecoder (shelf : _Shelf) : ShelfResult {
  function bookDecoder (book : _Book) : ShelfResult {
    if (typeof book.title !== 'string'
    || typeof book.author !== 'string'
    || (typeof book.wiki !== 'string' || !book.wiki)
    || typeof book.progress !== 'number'
    || typeof book.start !== 'string'
    || (typeof book.end !== 'string' || !book.end)
    ) {
      // could give more descriptive error messages here,
      // pertaining to the particular value that threw
      // an error. This is a slight hack so that Flow
      // type checks with the restrictive ShelfError class.
      // Ideally the Result class would use polymorphic types,
      // in which case an Error<Book> would be returned here,
      // and propagated up through to the top layer.
      return new ShelfResult(shelf, 'Something went wrong!')
    } else {
      return new ShelfResult(shelf, null)
    }
  }

  shelf.forEach(book => { // eslint-disable-line consistent-return
    const bookResult = bookDecoder(book)
    if (bookResult.error) {
      return bookResult
    }
  })

  return new ShelfResult(shelf)
}
