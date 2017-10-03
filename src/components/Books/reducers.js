// @flow
/* eslint-disable new-cap */
import { combineReducers } from 'redux'
import { fromJS, Record, List } from 'immutable'
import { isComplete } from './utils'
import { shelfDecoder } from './decoders'
import type { _Shelf } from './types'

// import json from './json'

/* Note that we cannot provide types for the elements of the list,
   nor may we enforce that 'loading' will always be a bool, or
   error a ?string. */
const Model = Record({
  currentBooks: List(),
  completedBooks: List(),
  loading: true,
  error: null,
})

export const NEW_SHELF = 'NEW_SHELF'
export const newShelf = (shelf:_Shelf) => ({
  type: NEW_SHELF,
  shelf,
})

export const NEW_SHELF_ERROR = 'NEW_SHELF_ERROR'
export const newShelfError = (error:?string) => ({
  type: NEW_SHELF_ERROR,
  error,
})

const shelf = (state = new Model(), action) => {
  switch (action.type) {
    case NEW_SHELF:
      return state
        /* Note again that we cannot strictly enforce type in List elements */
        .set('completedBooks', fromJS(action.shelf.filter(isComplete)))
        .set('currentBooks', fromJS(action.shelf.filter(b => !isComplete(b))))
        .set('loading', false)
    case NEW_SHELF_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

// async

const srcUrl = 'https://raw.githubusercontent.com/breezykermo/LachieKermode/master/Books/shelf.json'

export const getLachieShelf = () =>
  (dispatch : Function) => (
    fetch(srcUrl)
      .then(result => result.json())
      .then((data) => {
        // simulate Elm's Json.Decode validation
        const result = shelfDecoder(data.shelf)
        if (result.error) {
          // This is reached if the JSON is not valid.
          dispatch(newShelfError(result.error))
        } else {
          dispatch(newShelf(result.shelf))
        }
      })
      .catch(err => {
        // This is reached if there is a retrieval error.
        dispatch(newShelfError(`Something went wrong! ${err}`))
      })
  )

// NB: extra layer here is necessary so that all of state can be immutable
// another alternative would be to have the outer level of state mutable, and
// have all nested values `fromJS`ed. I prefer this approach, as it allows
// reducer composition in larger applications.
export default combineReducers({
  shelf,
})
