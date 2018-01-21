import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Info from './Info'
import Calendar from './Calendar'
import Contacts from './Contacts'
require('../styles/main.scss');
export default class Main extends Component {
    render () {
        return (
          <main>
            <Route exact path='/' component={Info}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/contacts' component={Contacts}/>
          </main>
        )
    }
}
