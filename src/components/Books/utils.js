// @flow
import React from 'react'
import type { _Book } from './types'

// Note that this is different from `renderWiki` in the Elm,
// as we cannot return an Html.Attribute msg (attribute assignment)
// as a single value in JS in the same way that we can in Elm.
export const deduceUrl = (book: _Book) => book.wiki || ''

export const renderErr = (error: ?string) => (
  (typeof error === 'string')
    ? <div>{error}</div>
    : null
)

export const isComplete = (book: _Book) => (typeof book.end === 'string')
// this synthesises the check in Elm, but important
// to mention null values in JS and their nuances

