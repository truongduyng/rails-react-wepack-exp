import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './theme'

export default class Header extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar
            title="TodoList"
          />
        </MuiThemeProvider>
    )
  }
}
