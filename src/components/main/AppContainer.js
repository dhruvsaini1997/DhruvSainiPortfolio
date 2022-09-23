import React, { Component } from 'react'
import Body from '../container/Body'
import Header from '../header/Header'
import './AppContainer'

export default class AppContainer extends Component {
  render() {
    return (
        <div className='appContainerMain'>
      <Header/>
      <Body/></div>
    )
  }
}
