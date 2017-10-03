import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getLachieShelf } from './reducers'

import Loading from './components/Loading'
import Desk from './components/Desk'
import Shelf from './components/Shelf'
import { renderErr } from './utils'
import { Shelf as Type_Shelf } from './types' // eslint-disable-line camelcase

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    store: PropTypes.shape({
      currentBooks: Type_Shelf,
      completedBooks: Type_Shelf,
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
    }),
  };

  componentDidMount () {
    this.props.dispatch(getLachieShelf())
  }

  render () {
    const { store } = this.props
    return store.loading ? (
      <Loading />
    ) : (
      <div className="app-case">
        <Desk books={store.currentBooks} />
        <Shelf books={store.completedBooks} />
        {renderErr(store.error)}
      </div>
    )
  }
}


export default connect(state => ({
  /* Convert state to JS (from Immutable objects) at this
     point of entry so that we can perform at least runtime
     type checks on the values. This is expensive, and almost
     certainly not worth the effort; I include it mainly for
     demonstrative purposes. */
  store: state.shelf.toJS(),
}))(App)
