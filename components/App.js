import React, {Component} from 'react';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default class App extends Component {
    render () {
        return (
          <div className="app">
            <Header icon='/img/icon-user.png' username="John Snow"/>
            <Main/>
            <Footer/>
          </div>
          )
    }
}
