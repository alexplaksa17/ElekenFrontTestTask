import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Info from './Info'
import Calculator from './Calculator'
import Contacts from './Contacts'
require('../styles/main.scss');
export default class Main extends Component {
    render () {
        return (
          <main>
            <Route exact path='/' component={Info}/>
            <Route path='/calendar' component={Calculator}/>
            <Route path='/contacts' component={Contacts}/>
          </main>
        )
    }
}
