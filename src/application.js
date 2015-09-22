
import React from 'react'
import Home from './home'
import { Provider } from 'react-redux'

export default class Application extends React.Component {
  render () {
    return (
      // As explained above, the Provider must wrap your application's Root component. This way,
      // this component and all of its children (even deeply nested ones) will have access to your
      // Redux store. Of course, to allow Provider to do that, you must give it the store
      // you built previously (via a "store" props).
      // That's almost all there is to say about Provider... One last word though:
      // You'll notice in the code above that Provider needs to have as its child, a function that returns
      // the root component instead of the component itself. This is a temporary API until React 0.14 comes
      // out, to fix a React 0.13 context issue.
      <Provider store={ this.props.store }>
        { () => <Home /> }
      </Provider>
    )
  }
}
