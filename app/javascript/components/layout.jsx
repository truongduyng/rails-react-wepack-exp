import React from 'react'
import Header from './appbar'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
      </div>
    )
  }
}
