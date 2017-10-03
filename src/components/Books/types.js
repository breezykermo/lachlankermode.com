// @flow
/**
Flow types that mirror the type aliases defined in Elm.
**/
import { PropTypes } from 'react'

export type _Date = {
  month: number,
  day: number,
  year: number
}

export type _Book = {
  title: string,
  author: string,
  wiki: ?string,
  progress: number,
  start: string,
  end: ?string
}

export type _Shelf = _Book[]

export type _Model = {
  currentBooks: _Book[],
  completedBooks: _Book[],
  error: ?string,
  loading: boolean
}

/**
Synthesized 'types' through React's PropType functionality.
Note that these checks are performed DURING RUNTIME,
when props are passed to a component, rather than at
compile-time as in Elm or Flow.
**/

export const Book = PropTypes.shape({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  wiki: PropTypes.string,
  progress: PropTypes.number.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
})

export const Shelf = PropTypes.arrayOf(Book)
